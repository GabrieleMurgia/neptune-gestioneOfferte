let username = modeluserInfo.getData().username
if(isProjectManager(username)){
    handleNewOffer("+")

if(isSmartphoneScreen()){
VBox.removeStyleClass("VBox")
VBox.addStyleClass("VBoxShrink")
VBox1.removeStyleClass("VBox1")
VBox1.addStyleClass("VBox1Expand")
HBox.removeStyleClass("toolBarDX")
HBox.addStyleClass("toolBarDXExpand")
VBox6.addStyleClass("VBox6")

inSimpleFormcliente.setWidth("40vw")
inSimpleFormtitolo.setWidth("40vw")
inSimpleFormoggettoOfferta.setWidth("40vw")
datePickerFormdataRichiesta.setWidth("40vw")
inSimpleFormpath.setWidth("40vw")
}

}else{
    buttonAddNew.setEnabled(false)
    sap.m.MessageToast.show("Non hai i permessi necessari");    
} 
