// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    var adUnit = "ca-app-pub-4639322597553388/9971451357";
    var adUnitFullScreen = "ca-app-pub-4639322597553388/6599182553";
    var isOverlap = true;
    var isTest = true;

    if ($.isWin) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.8.5.css');
    } else if ($.isAndroid) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-android-3.8.5.css');
    } else if ($.isiOS) {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-ios-3.8.5.css');
    } else {
        document.getElementById('themeStylesheet').setAttribute('href', './css/chui-win-3.8.5.css');
    }
    var tabbarOP = {
        tabs: 4,
        icons: ["home", "drinks", "cakes", "pizzas"],
        labels: ["Home", "Drinks", "Cakes", "Pizzas"],
        selected: 1
    };
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        window.admob.setUp(adUnit, adUnitFullScreen, isOverlap, isTest);
        window.admob.showBannerAd('top-center', 'SMART_BANNER');
        window.admob.showFullScreenAd();
        $.UITabbar(tabbarOP);
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();