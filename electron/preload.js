const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    openAlertWindow: ({ title, url }) => ipcRenderer.send('alerts', { title, url })
  }
)
