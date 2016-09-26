cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cranberrygame.cordova.plugin.ad.admob/www/admob.js",
        "id": "com.cranberrygame.cordova.plugin.ad.admob.admob",
        "pluginId": "com.cranberrygame.cordova.plugin.ad.admob",
        "clobbers": [
            "window.admob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cranberrygame.cordova.plugin.ad.admob": "1.0.70",
    "com.google.playservices": "21.0.0",
    "com.cranberrygame.cordova.plugin.ad.admobsdk": "1.0.1"
}
// BOTTOM OF METADATA
});