var app = require("app");
var BrowserWidow = require("browser-window");
require("crash-reporter").start();

var mainWindow = null;
app.on("window-all-closed", function(){
    if(process.platform != "darwin"){
        app.quit();
    }
});


app.on("ready", function(){
    mainWindow = new BrowserWidow({width:800, height:600});
    mainWindow.loadUrl("file://" + __dirname + "/index.html");
    console.log("__dirname:" + __dirname)
    mainWindow.openDevTools();
    mainWindow.on("closed", function(){
        mainWindow = null;
    });
});
