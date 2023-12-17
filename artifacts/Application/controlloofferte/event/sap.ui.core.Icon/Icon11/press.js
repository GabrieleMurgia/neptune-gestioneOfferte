if(!modeltempFilter.getData().init){
handleFiltro("stepErr",this)
}else{
    modeltempFilter.setData({
        init:true,
    step:"stepErr",
    iconRef:this
})

apigetOfferte2()
}
