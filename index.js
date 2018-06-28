const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for the app to be ready
app.on('ready', function(){
  
    //Create Window
    mainWindow = new BrowserWindow({});

    //Load html into window
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'mainWindow.html'),
      protocol: 'file',
      slashes:true
    }));
});
