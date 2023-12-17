const context = this.getSelectedItem().getBindingContext() 

// Get Entire Model
const data = context.getObject();

handleChangeTab(data)
handleManager(data)


if(isSmartphoneScreen()){
VBox.removeStyleClass("VBox")
VBox.addStyleClass("VBoxShrink")
VBox1.removeStyleClass("VBox1")
VBox1.addStyleClass("VBox1Expand")
HBox.removeStyleClass("toolBarDX")
HBox.addStyleClass("toolBarDXExpand")
VBox6.addStyleClass("VBox6")
}
