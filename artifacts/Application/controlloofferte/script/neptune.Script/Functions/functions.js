

            
setTimeout(function() {
            tempFilter.setModel({})
            modeltempFilter.setData({
                init:true
            })
}, 2000);     

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


function checkStatus(status){
    VBox8.setVisible(false)
    VBox5.setVisible(true)
    VBox4.setVisible(true)
    VBox3.setVisible(true)
    VBox2.setVisible(true)
    VBox18.setVisible(true)


    if(status === "step1"){
        
        Icon3.setColor("green")
        Icon2.setColor("gray")
        Icon1.setColor("gray")
        Icon.setColor("gray")
        Icon5.setColor("gray")

        return "In attesa di creazione"
    }else if(status === "step2"){

        Icon3.setColor("green")
        Icon2.setColor("orange")
        Icon1.setColor("gray")
        Icon.setColor("gray")
        Icon5.setColor("gray")

        return "Da controllare"

    }else if(status === "stepInt"){
        Icon3.setColor("green")
        Icon2.setColor("green")
        Icon1.setColor("green")
        Icon5.setColor("green")
        Icon.setColor("orange")
        

        return "Da controllare"
    }else if(status === "step3"){

         Icon3.setColor("green")
        Icon2.setColor("green")
        Icon1.setColor("orange")
        Icon.setColor("gray")
        Icon5.setColor("gray")

        return "Inviata al cliente, in attesa di firma"

    }else if(status === "step4"){

         Icon3.setColor("green")
        Icon2.setColor("green")
        Icon1.setColor("green")
        Icon5.setColor("orange")
        Icon.setColor("gray")

        return "Inviata al cliente, in attesa di firma"

    }else if(status === "step5"){
        
        Icon3.setColor("green")
        Icon2.setColor("green")
        Icon1.setColor("green")
        Icon.setColor("green")
        Icon5.setColor("green")

        return "Restituita dal cliente firmata"

    }else if(status === "stepReset"){
       
       linkSPclienti.setText("")
       HBox7.setVisible(false)

        return ""

    }else{

    VBox8.setVisible(true)
    textMotivo.setText(JSON.parse(modelselectedOfferObject.getData().status).motivo)
    VBox5.setVisible(false)
    VBox4.setVisible(false)
    VBox3.setVisible(false)
    VBox2.setVisible(false)
    VBox18.setVisible(false)
    
    }
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

   function isSmartphoneScreen() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return width <= 600; 
    }

function handleFilterInit() {
    let icons = [Icon6, Icon7, Icon8, Icon9, Icon10, Icon11];
    let allColorsEmpty = icons.every(icon => icon.getColor() === "");

     

    // Primo ciclo: se tutti i colori sono "", esegue firePress una volta per ogni icona
    if (allColorsEmpty) {
        icons.forEach(icon => {
            icon.firePress();
        });
    } else {
        // Secondo ciclo: se almeno un colore è diverso da "", esegue firePress due volte per quelle icone
        icons.forEach(icon => {
            if (icon.getColor() !== "") {
                icon.firePress();
                icon.firePress();
            }
        });
    }
}