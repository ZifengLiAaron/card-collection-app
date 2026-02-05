const path = require('path');
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
    })
    win.loadFile(path.join(__dirname, './renderer/pages/index.html'))
    win.setMenuBarVisibility(false)
}
app.whenReady().then(() => {
    createWindow()
})