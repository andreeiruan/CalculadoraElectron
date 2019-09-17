const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 350,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('index.html')

    mainWindow.on('cloded', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)