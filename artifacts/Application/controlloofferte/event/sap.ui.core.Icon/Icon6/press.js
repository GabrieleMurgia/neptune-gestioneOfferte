if(!modeltempFilter.getData().init){
handleFiltro("step1",this)
}else{
    modeltempFilter.setData({
    init:true,
    step:"step1",
    iconRef:this,
})
apigetOfferte2()
}

 