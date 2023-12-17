sap.m.MessageToast.show("Offerta Inviata");

var options = {
    data: {
        itemInfo:{
             cliente:inSimpleFormcliente.getValue(),
             titolo:inSimpleFormtitolo.getValue(),
             oggettoOfferta:inSimpleFormoggettoOfferta.getValue(),
             dataRichiesta:datePickerFormdataRichiesta.getValue(),
             richiedente:{...modeluserInfo.getData()},
             status:"step1"
        },
        userInfo:modeluserInfo.getData(),
    }
};

 

apihandleEmail(options);

/* reloadAfterOneSecond() */