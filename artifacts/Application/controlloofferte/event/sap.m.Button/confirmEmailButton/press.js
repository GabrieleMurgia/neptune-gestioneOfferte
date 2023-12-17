
const data = modelselectedOfferObject.getData();

data.status = "step4"

var options = {
    data: [data]
};

apiinsertItem(options);