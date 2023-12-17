function getFormValues(step){
    let formValues = {
        "cliente": inSimpleFormcliente.getValue(),
        "titolo":inSimpleFormtitolo.getValue(),
        "oggettoOfferta": inSimpleFormoggettoOfferta.getValue(),
        "dataRichiesta": datePickerFormdataRichiesta.getValue(),
        "richiedente": JSON.stringify(modeluserInfo.getData()),
        "path": inSimpleFormpath.getValue(),
        "status":step
}
    return formValues
}

function checkForm() {
    const fieldsToCheck = [
        inSimpleFormcliente,
        inSimpleFormtitolo,
        inSimpleFormoggettoOfferta,
        datePickerFormdataRichiesta,
        inSimpleFormpath
    ];

    let isAnyFieldEmpty = false;

    // Controlla ogni campo
    fieldsToCheck.forEach(field => {
        if (field.getValue() === "") {
            field.setValueState("Error"); 
            isAnyFieldEmpty = true;
        } else {
            field.setValueState("None");
        }
    });

    if (isAnyFieldEmpty) {
        sap.m.MessageToast.show("Compila tutti i campi");

        return false
    }

    return true
}

function resetForm(){
     const fieldsToCheck = [
        inSimpleFormcliente,
        inSimpleFormtitolo,
        inSimpleFormoggettoOfferta,
        datePickerFormdataRichiesta,
        inSimpleFormpath
    ];

     fieldsToCheck.forEach(field => {
       field.setValue("")
    });
}