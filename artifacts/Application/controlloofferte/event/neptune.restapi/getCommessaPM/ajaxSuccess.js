let data = xhr.responseJSON
const newArray = data.map(item => item.cognome.toLowerCase() + item.nome.charAt(0).toLowerCase());
modelarrayRichiedenti.setData(newArray)
