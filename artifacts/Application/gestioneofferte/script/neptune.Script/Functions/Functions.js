 document.addEventListener('DOMContentLoaded', (event) => {
    var button = document.getElementById('pdfUpload-fu_button-inner');
    if (button) {
        button.click();
    } else {
        console.log('Pulsante non trovato');
    }
});


function handledialogSPOffClienti(){
    dialogSPOffClienti.open()
}


function handleInsertPdf(pathSP){

    /* let base64Formatter = formatBase64(base64) */


   modeltableOfferteManager.oData.map(item => {
    if (item.id === modeltempSelectedObject.getData().id) {
       item.pdfOfferta = pathSP;
       item.status = "step2"
    }

    modeltableOfferteManager.refresh()
    dialogSPOffClienti.close()
   /*  pdfEncoding.setText("");
    pdfUpload.setValue("") */
});

}


async function reloadAfterOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Aspetta per 1 secondo (1000 millisecondi)
    location.reload(); // Ricarica la pagina
}


function checkStatus(status){
    if(status === "step1"){
        return "In attesa di creazione"
    }else if(status === "step2"){
        return "Da controllare"
    }else if(status === "step3"){
        return "Inviata al cliente, in attesa di firma"
    }else if(status === "step4"){
        return "Inviata al cliente, in attesa di firma"
    }else if(status === "step5"){
        return "Restituita dal cliente firmata"
    }else{
        return status
    }
}