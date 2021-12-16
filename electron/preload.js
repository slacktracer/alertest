const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  focusMe: () => ipcRenderer.send("focusMe", {}),
  openOnDashboard: ({ caseID }) =>
    ipcRenderer.send("openOnDashboard", { caseID }),
});
