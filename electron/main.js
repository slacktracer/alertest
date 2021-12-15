import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

const alertWindows = [];

ipcMain.on('alerts', (event, { title, url }) => {
  const alertWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      enableRemoteModule: false,
      nodeIntegration: false,
      preload: path.join(app.getAppPath(), "preload.js"),
      sandbox: true
    },
  });

  alertWindows.push(alertWindow);

  alertWindow.setMenuBarVisibility(false);
  alertWindow.setTitle(title);

  alertWindow.loadURL(url);
})

let window;

export const make = ({ mode }) => {
  const gotSingleInstanceLock = app.requestSingleInstanceLock();

  if (!gotSingleInstanceLock) {
    app.quit();

    return;
  }

  app.whenReady().then(() => createWindow({ mode }).then(windowValue => window = windowValue));

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
      createWindow({ mode });
    }
  });
};

const createWindow = async ({ mode } = {}) => {
  const window = new BrowserWindow({
    icon: "../public/redbird.png",
    height: 800,
    width: 600,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: path.join(app.getAppPath(), "preload.js"),
      sandbox: true
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

  window.setMenuBarVisibility(false);
  window.setTitle("Twiage Alert System");

  if (mode === "development") {
    window.webContents.openDevTools();
  }

  window.on('close', () => {
    alertWindows.forEach(alertWindow => alertWindow.isDestroyed() === false && alertWindow.close());
  })

  return window;
};
