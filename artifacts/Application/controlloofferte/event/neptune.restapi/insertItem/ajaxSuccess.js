sap.m.MessageToast.show("Stato Aggiornato");

textAreaOfferteClienti.setValue("")


var options = {
    data: {
        itemInfo:modelselectedOfferObject.getData(),
        userInfo:modeluserInfo.getData(),
    }
};

 

apihandleEmail(options);

/* reloadAfterOneSecond() */