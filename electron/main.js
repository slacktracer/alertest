import { app, BrowserWindow, ipcMain, shell } from "electron";
import path from "path";

ipcMain.on("openOnDashboard", (event, { caseID }) => {
  const baseURL = "https://ondeck.twiagemed.net";
  const path = "/cases/"; // const path = `/cases/${caseID}`;

  shell.openExternal(`${baseURL}${path}${caseID}`);
});

ipcMain.on("focusMe", (event) => {
  event.sender.focus();
});

let window;

export const make = ({ mode }) => {
  const gotSingleInstanceLock = app.requestSingleInstanceLock();

  if (!gotSingleInstanceLock) {
    app.quit();

    return;
  }

  app
    .whenReady()
    .then(() =>
      createWindow({ mode }).then((createdWindow) => (window = createdWindow))
    );

  app.on("second-instance", () => {
    if (window) {
      if (window.isMinimized()) {
        window.restore();
      }
      window.focus();
    }
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      window = createWindow({ mode });
    }
  });
};

const createWindow = async ({ mode } = {}) => {
  const window = new BrowserWindow({
    autoHideMenuBar: true,
    icon: "../public/redbird.png",
    height: 600,
    width: 600,
    webPreferences: {
      enableRemoteModule: true,
      nativeWindowOpen: false,
      nodeIntegration: true,
      preload: path.join(app.getAppPath(), "preload.js"),
      sandbox: true,
    },
  });

  const url = "http://localhost:3000";
  const fallbackFilePath = `./fallback.html`;

  try {
    await window.loadURL(url);
  } catch (error) {
    global.console.error(error);
    await window.loadFile(fallbackFilePath);
  }

  if (mode === "development") {
    window.webContents.openDevTools();
  }

  window.webContents.setWindowOpenHandler(() => {
    const newWindowConfiguration = {
      action: "allow",
      overrideBrowserWindowOptions: {
        autoHideMenuBar: true,
        webPreferences: {
          preload: path.join(app.getAppPath(), "preload.js"),
        },
      },
    };

    return newWindowConfiguration;
  });

  return window;
};
