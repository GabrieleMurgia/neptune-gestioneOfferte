
const data = modelselectedOfferObject.getData();

data.status = "step5"

var options = {
    data: [data]
};

apiinsertItem(options);