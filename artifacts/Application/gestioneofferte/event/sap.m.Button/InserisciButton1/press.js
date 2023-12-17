
// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();  

// Get Entire Model
const data = context.getObject();

modeltempSelectedObject.setData(data)

if(this.getText() === "pathSP offerte clienti"){
    handledialogSPOffClienti()
}else if(this.getText() === "Invia al cliente"){
    window.location.href = "mailto:someone@example.com?Subject=Hello%20again"
}else if(this.getText() === "Rimuovi path"){
    data.pdfOfferta = ""
    data.status = "step1"
    modeltableOfferteManager.refresh()
}else if(this.getText() === "Offerta firmata"){
    data.status = "step5"
    InserisciButton1.setEnabled(false)
    modeltableOfferteManager.refresh()
}else{
      handledialogSPOffClienti()
}