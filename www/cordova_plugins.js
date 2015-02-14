cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.plugin.admob/www/AdMob.js",
        "id": "com.rjfun.cordova.plugin.admob.AdMob",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.splashscreen": "0.3.5",
    "com.rjfun.cordova.extension": "1.0.6",
    "com.rjfun.cordova.plugin.admob": "2.1.7",
    "com.google.playservices": "19.0.0",
    "com.google.admobsdk": "6.12.2"
}
// BOTTOM OF METADATA
});