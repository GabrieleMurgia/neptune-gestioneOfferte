
let validFields = checkForm()

if(validFields){
    var options = {
    data: getFormValues("step1")
}

apisendOfferta(options);
}