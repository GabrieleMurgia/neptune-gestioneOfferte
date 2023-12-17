let rejectedItem = JSON.parse(JSON.stringify(modelselectedOfferObject.getData()))

let stato = {
    status:rejectedItem.status,
    motivo:textAreaReject.getValue()
}

let stringifyStato = JSON.stringify(stato)

rejectedItem.status = stringifyStato

 

var options = {
    data: rejectedItem
};



apicheckDocument(options);