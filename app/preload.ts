const { ipcRenderer } = require('electron')


const closeWindow = async () => {
  await ipcRenderer.invoke('close-main-window')
}

const maximizeWindow = async () => {
  await ipcRenderer.invoke('maximize-main-window')
}

const reloadWindow = async () => {
  await ipcRenderer.invoke('reload-main-window')
}

const debugWindow = async () => {
  await ipcRenderer.invoke('debug-main-window')
}

const onTopWindow = async () => {
  await ipcRenderer.invoke('top-main-window')
}

const toggleFullscreenWindow = async () => {
  await ipcRenderer.invoke('toggle-fullscreen-main-window')
}


window.api = {
  closeWindow,
  maximizeWindow,
  reloadWindow,
  debugWindow,
  onTopWindow,
  toggleFullscreenWindow,
}
