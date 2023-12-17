if(!modeltempFilter.getData().init){
handleFiltro("step2",this)
}else{
    modeltempFilter.setData({
        init:true,
    step:"step2",
    iconRef:this
})

apigetOfferte2()
}

