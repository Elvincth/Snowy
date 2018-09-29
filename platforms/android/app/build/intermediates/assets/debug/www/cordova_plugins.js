cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "com.ourcodeworld.plugins.Filebrowser.Filebrowser",
    "file": "plugins/com.ourcodeworld.plugins.Filebrowser/www/filebrowser.js",
    "pluginId": "com.ourcodeworld.plugins.Filebrowser",
    "clobbers": [
      "window.OurCodeWorld.Filebrowser"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-ionic-webview": "2.1.4",
  "com.ourcodeworld.plugins.Filebrowser": "1.0.0"
};
// BOTTOM OF METADATA
});