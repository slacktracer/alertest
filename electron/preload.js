const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    openOnDashboard: ({ caseID }) => ipcRenderer.send("openOnDashboard", { caseID })
  }
)
