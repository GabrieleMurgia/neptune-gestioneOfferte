
let selectedItem = modelselectedOfferObject.getData()
selectedItem.status = "step2"
selectedItem.pdfOfferta = textAreaOfferteClienti.getValue()


 
var options = {
    data: [selectedItem]
};


apiinsertItem(options);