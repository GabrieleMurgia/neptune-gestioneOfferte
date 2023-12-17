const context = oEvent.oSource.getBindingContext();  
const data = context.getObject();

data.status = "step4"
modeltableOfferteManager.refresh()