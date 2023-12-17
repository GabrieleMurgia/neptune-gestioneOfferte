let user = modelinfoUser.getData().username
let data;

if(user === "monicap" || user === "piccinnid" || user === "murgiag"){
    data = xhr.responseJSON;
}else{
    data = xhr.responseJSON.filter(item =>{
       return item.richiedente.username === user}
    )
}




const statusCounts = {
    'In attesa di creazione': 0,
    'Da controllare PM': 0,
    'Da inviare': 0,
    'Da confermare': 0,
    'Confermata': 0,
    'Firmata dal cliente': 0,
    'Rifiutate': 0
};

data.forEach(item => {
    // Aggiorna i conteggi in base allo status
    switch (item.status) {
        case 'step1':
            statusCounts['In attesa di creazione']++;
            break;
        case 'step2':
            statusCounts['Da controllare PM']++;
            break;
        case 'step3':
            statusCounts['Da inviare']++;
            break;
        case 'step4':
            statusCounts['Da confermare']++;
            break;
        case 'stepInt':
            statusCounts['Confermata']++;
            break;
        case 'step5':
            statusCounts['Firmata dal cliente']++;
            break;
        default:
            statusCounts['Rifiutate']++;
    }
});

const seriesData = [
    { name: 'In attesa di creazione', y: statusCounts['In attesa di creazione'], color: 'orange'  },
    { name: 'Da controllare PM', y: statusCounts['Da controllare PM'], color: 'orange'  },
    { name: 'Da inviare', y: statusCounts['Da inviare'], color: 'orange'  },
    { name: 'Da confermare', y: statusCounts['Da confermare'], color: 'orange'  },
    { name: 'Confermata', y: statusCounts['Confermata'], color: 'orange'  },
    { name: 'Firmata dal cliente', y: statusCounts['Firmata dal cliente'], color: 'green'  },
    { name: 'Rifiutate', y: statusCounts['Rifiutate'], color: 'red' }
];

const series = [{
    name: 'Numero Offerte',
    data: seriesData
}];

// Create the chart
const chartOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Offerte'
    },
   xAxis: {
        categories: ['In attesa di creazione', 'Da controllare PM', 'Da inviare', 'Da confermare', 'Confermata', 'Firmata dal cliente', 'Rifiutate']
    },
    yAxis: {
        title: {
            text: 'Numero Offerte'
        },
        tickInterval: 1,
    },
    series: series,
    credits: {
        enabled: false
    }
};

setTimeout(function() {
Highchart.update(chartOptions);
}, 1000)





















