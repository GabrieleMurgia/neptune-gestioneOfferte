function handleNewOffer(currentState){
    if(currentState === "+"){
    panelInformation.setExpandable(false)
    HBox2.setVisible(false)
    HBox3.setVisible(false)
    HBox4.setVisible(false)
    panelRepoOffClienti.setVisible(false)
    panelStatus.setVisible(false)
    SimpleFormOfferte.setVisible(true)
    HBox11.setVisible(true)
    hBoxManager.setVisible(false)
    HBox5.setVisible(false)
    HBox14.setVisible(false)
    VBox12.setVisible(false)
    VBox16.setVisible(false)
    VBox11.setVisible(false)
    HBox9.setVisible(false)

    }else{
    
    if(modeluserInfo.getData().username === "piccinnid" || modeluserInfo.getData().username === "murgiag"){
        hBoxManager.setVisible(true)
    }
        HBox9.setVisible(true)
    panelInformation.setExpandable(true)
    HBox2.setVisible(true)
    HBox3.setVisible(true)
    HBox4.setVisible(true)
    HBox9.setVisible(true)
    SimpleFormOfferte.setVisible(false)
    HBox11.setVisible(false)
    panelRepoOffClienti.setVisible(true)
    panelStatus.setVisible(true)
    }
}

function handleChangeTab(data){

     if(modeluserInfo.getData().username === "piccinnid" || modeluserInfo.getData().username === "murgiag"){
        hBoxManager.setVisible(true)
    }
    modelselectedOfferObject.setData(data)
    handleDettaglio(data)
    panelInformation.setExpandable(false)
    panelStatus.setExpandable(false)

    addNewOffert.setText("+")
    HBox2.setVisible(true)
    HBox3.setVisible(true)
    HBox4.setVisible(true)
    SimpleFormOfferte.setVisible(false)
    HBox11.setVisible(false)
    panelRepoOffClienti.setVisible(true)
    panelStatus.setVisible(true)
     panelStatus.setExpandable(false)
     panelInformation.setExpandable(false)
     
     if(data.path){
        panelRepoOffClienti.setExpandable(false)
     }
}


function handleMod(userData){
    let user = userData.username
    
    if(user === "piccinnid" || user === "murgiag"){
        hBoxManager.setVisible(true)
    }else if(user !== "piccinnid" || user !== "murgiag"){
        hBoxManager.setVisible(false)
    }else{
        hBoxManager.setVisible(false)
    }
}


function handleManager(data){
let status = data.status
let user = modeluserInfo.getData()

    if(data.nrOffertaSap){
        inputLabelNrOffertaSap.setValue(data.nrOffertaSap)
    }else{
         inputLabelNrOffertaSap.setValue("")
    }

    if(user.username == "piccinnid" || user.username == "murgiag"){
        buttonLabelNrOffertaSap.setVisible(true)
        inputLabelNrOffertaSap.setEditable(true)
    }else{
         buttonLabelNrOffertaSap.setVisible(false)
         inputLabelNrOffertaSap.setEditable(false)
    }

    if(status === "step1"){
        
        HBox5.setVisible(false)
        VBox10.setVisible(true)
           if(isAdmin(user.username)){
             HBox14.setVisible(true)
        }else{
             HBox14.setVisible(false)
        }
        VBox11.setVisible(false)
        VBox12.setVisible(false)
        VBox16.setVisible(false)
    }else if(status === "step2"){

        if(user.username !== "piccinnid" && user.username !== "monicap"){
            HBox5.setVisible(true)
        }

        VBox10.setVisible(false)
        HBox14.setVisible(false)
        VBox11.setVisible(false)
        VBox12.setVisible(false)
         VBox16.setVisible(false)
    }else if(status === "stepInt"){
        VBox10.setVisible(false)
        HBox14.setVisible(false)
        VBox11.setVisible(false)
           if(isAdmin(user.username)){
             VBox12.setVisible(true)
        }else{
             VBox12.setVisible(false)
        }
        HBox5.setVisible(false)
        VBox16.setVisible(false)
    }else if(status === "step3"){
         
        VBox10.setVisible(false)
        HBox14.setVisible(false)
        if(isAdmin(user.username)){
             VBox11.setVisible(true)
        }else{
             VBox11.setVisible(false)
        }
        VBox12.setVisible(false)
         VBox16.setVisible(false)
    }else if(status === "step4"){
        if(user.username === "murgiag" || user.username === "monicap" || user.username === "mascheroniv" && !linkSPclienti.getVisible() ){
            HBox5.setVisible(true)
        }
        VBox10.setVisible(false)
        HBox14.setVisible(false)
        VBox11.setVisible(false)
        VBox12.setVisible(false)
         VBox16.setVisible(false)
    }else if(status === "step5"){
        VBox10.setVisible(false)
        HBox14.setVisible(false)
        VBox11.setVisible(false)
        VBox12.setVisible(false)
        VBox16.setVisible(false)
    }else{
        HBox5.setVisible(false)
        if(isAdmin(user.username)){
              VBox16.setVisible(true)
        }else{
             VBox16.setVisible(false)
        }
        VBox10.setVisible(false)
        HBox14.setVisible(false)
        VBox11.setVisible(false)
        VBox12.setVisible(false)
    }

}

function handleUpdateListFilter(){
    apigetOfferte2()
}

function handleFiltro(step, iconRef) {
    // Cambio di colore
    iconRef.setColor(iconRef.getColor() === "" || iconRef.getColor() === "#C0C0C0" ? "#00D4FF" : "#C0C0C0");

    let filterArray = modelfilterArray.getData();
    if (!Array.isArray(filterArray)) {
        filterArray = [];
    }

    // Gestione dell'array dei filtri
    const index = filterArray.indexOf(step);
    if (index === -1) {
        if(step === "step5"){
            filterArray.push(step)
            filterArray.push("stepInt")
        }else{
             filterArray.push(step); // Aggiungi se non presente
        }
       
    } else {
         if(step === "step5"){
              
             filterArray.splice(index, 1)
             filterArray = filterArray.filter(item => item !== "stepInt")
        }else{
             filterArray.splice(index, 1); // Rimuovi se presente     
        }
       
    }

     

    let filteredArray;
    if (filterArray.includes("stepErr")) {
        // Filtra escludendo specifici step se "stepErr" è presente
        let excludedSteps = ["step1", "step2", "step3", "step4", "stepInt", "step5"];

        // Rimuove gli elementi di array1 che sono presenti in array2
        let risultato1 = filterArray.filter(elemento => !excludedSteps.includes(elemento));

        // Rimuove gli elementi di array2 che sono presenti in array1
        let risultato2 = excludedSteps.filter(elemento => !filterArray.includes(elemento));

        excludedSteps =  risultato1.concat(risultato2);


        filteredArray = modelbackupListaOfferte.getData().filter(item => !excludedSteps.includes(item.status));
    } else {
        // Applica i filtri normali
        filteredArray = modelbackupListaOfferte.getData().filter(item => filterArray.includes(item.status));
    }

    if (filterArray.length === 0) {
        filteredArray = modelbackupListaOfferte.getData();
    }

    // Imposta i nuovi dati
    modelfilterArray.setData(filterArray);
    modelListOfferte.setData(filteredArray);
    modelListOfferte.refresh();
    
}





















