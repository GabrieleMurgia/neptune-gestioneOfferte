


// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function (startParams) {
    z = 0;

    if(typeof(AppCache) === "undefined"){
        LoadingScreen.destroy();
    }

    filesToUpload = [];

    // data = startParameters from Cockpit Tile application settings (action tab)
    // Do your Stuff

    // Some stuff needs to be timed later. Run them inside a timeout
    setTimeout(function () {

    }, 200);
});

// Only for View - Custom beforeDisplay - Trigger everytime the view is started
if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function (startParams) {
        setTimeout(function () {
            oApp.to(oPageCheckOfferte);
        }, 1000);
    });
}