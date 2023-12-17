function handleDettaglio(data){
/* let data = modelselectedOfferObject.getData() */

textInformationCliente.setText(data.cliente)
textInformationPathSP.setText(data.path)
textInformationPathSP.setHref(data.path)
textInformationOggettoOfferta.setText(data.oggettoOfferta)
textInformationTitolo.setText(data.titolo)
textInformationDataRichiesta.setText(data.dataRichiesta)
textStatus.setText(checkStatus(data.status))
linkSPclienti.setText(data.pdfOfferta)
linkSPclienti.setHref(data.pdfOfferta)
inputLabelNrOffertaSap.setValue(data.nrOffertaSap)

   if(data.status){
    HBox7.setVisible(true)
 }else{
    HBox7.setVisible(false)
 }

  if(data.pdfOfferta){
    linkSPclienti.setVisible(true)
    titleNessunPath.setVisible(false)

    let infoUser = modeluserInfo.getData()
    
    if(data.status === "step2" || data.status === "stepInt" && infoUser.username === "murgiag"){
         
    }else{
        HBox5.setVisible(false)
    }
 
    }else{
        linkSPclienti.setVisible(false)
        titleNessunPath.setVisible(true)
    }
}

async function reloadAfterOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Aspetta per 1 secondo (1000 millisecondi)
    location.reload(); // Ricarica la pagina
}

function clearForm(){
     
    inSimpleFormcliente.setValue("")
    inSimpleFormtitolo.setValue("")
    inSimpleFormoggettoOfferta.setValue("")
    datePickerFormdataRichiesta.setValue("")
    inSimpleFormpath.setValue("")
    hBoxManager.setVisible(false)
    textStatus.setText(checkStatus("stepReset"))
}

function isAdmin(user){
    let admins = ["murgiag","piccinnid"]
    if(admins.includes(user)){
        return true
    }else{
        return false
    }
}

function isProjectManager(id) {
    let projectManagers = modelarrayRichiedenti.getData()
    return projectManagers.includes(id);
}




















