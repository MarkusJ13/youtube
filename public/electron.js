const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');



 //handle setupevents as quickly as possible
 // const setupEvents = require('./../installers/setupEvents.js');
 // if (setupEvents.handleSquirrelEvent()) {
 //    // squirrel event handled and app will exit in 1000ms, so don't do anything else
 //    return;
 // }

// Module to control application life.
const {ipcMain} = require('electron')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});