const data = req.body;
const itemInfo = data.itemInfo;
const userInfo = data.userInfo;
const richiedenteInfo = data.itemInfo.richiedente;
const richiedente = data.itemInfo.richiedente.name

// Funzione per l'invio delle email
async function sendCustomEmail(to, subject, templateId, primitives) {
    await sendEmail({
        to,
        subject,
        from: "SAP_PL3@PL3GROUP.COM",
        templateId,
        primitives
    });
}

// Funzione per il parsing sicuro del JSON
function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return null;
    }
}

// Estrazione e parsing dello stato
const parsedStatus = safeParse(itemInfo.status);
let isStatusObject

if(parsedStatus?.motivo){
   isStatusObject = parsedStatus.motivo !== "";
}

/* d.piccinni@pl3group.com */
// Logica principale per l'invio delle email basata sullo stato
switch (itemInfo.status) {
    case "step1":
        sendCustomEmail(["d.piccinni@pl3group.com"], "Offerta Inviata", "f5432db5-5ec7-46cc-8484-8afa267fad17", {
            cliente: itemInfo.cliente,
            titolo: itemInfo.titolo,
            oggettoOfferta: itemInfo.oggettoOfferta,
            dataRichiesta: itemInfo.dataRichiesta,
            richiedente
        });
        break;
    case "step2":
        sendCustomEmail(richiedenteInfo.email, "Offerta Inviata", "e200af57-bce3-4e97-ae87-00fd7d87c0e6", {
            statoPrecedente: "In attesa di creazione",
            statoSuccessivo: "Da controllare PM",
            cliente: itemInfo.cliente,
            titolo: itemInfo.titolo,
            oggettoOfferta: itemInfo.oggettoOfferta,
            dataRichiesta: itemInfo.dataRichiesta,
            richiedente
        });
        break;
        case "stepInt":
        sendCustomEmail(richiedenteInfo.email, "Offerta Inviata", "e200af57-bce3-4e97-ae87-00fd7d87c0e6", {
            statoPrecedente: "Controllata",
            statoSuccessivo: "in Attesa di firma",
              cliente: itemInfo.cliente,
            titolo: itemInfo.titolo,
            oggettoOfferta: itemInfo.oggettoOfferta,
            dataRichiesta: itemInfo.dataRichiesta,
            richiedente
        });
        break;
        case "step3":
        sendCustomEmail(["d.piccinni@pl3group.com"], "Offerta Inviata", "e200af57-bce3-4e97-ae87-00fd7d87c0e6", {
            statoPrecedente: "Controllata dal PM",
            statoSuccessivo: "Da invare al cliente",
              cliente: itemInfo.cliente,
            titolo: itemInfo.titolo,
            oggettoOfferta: itemInfo.oggettoOfferta,
            dataRichiesta: itemInfo.dataRichiesta,
            richiedente
        });
        break;
    case "step4":
        sendCustomEmail(["m.podavitte@pl3group.com",richiedenteInfo.email], "Offerta Inviata", "e200af57-bce3-4e97-ae87-00fd7d87c0e6", {
            statoPrecedente: "Inviata al cliente",
            statoSuccessivo: "Da controllare",
              cliente: itemInfo.cliente,
            titolo: itemInfo.titolo,
            oggettoOfferta: itemInfo.oggettoOfferta,
            dataRichiesta: itemInfo.dataRichiesta,
            richiedente
        });
        break;
    case "step5":
        sendCustomEmail([richiedenteInfo.email,"m.podavitte@pl3group.com"], "Offerta Inviata", "e200af57-bce3-4e97-ae87-00fd7d87c0e6", {
            statoPrecedente: "In attesa di firma",
            statoSuccessivo: "Firmata dal cliente",
            cliente: itemInfo.cliente,
            titolo: itemInfo.titolo,
            oggettoOfferta: itemInfo.oggettoOfferta,
            dataRichiesta: itemInfo.dataRichiesta,
            richiedente
        });
        break;
    default:
        if (isStatusObject) {
          
            const innerStatus = parsedStatus.status;
            const motivo = parsedStatus.motivo;

            switch (innerStatus) {
                case "step4":
                    sendCustomEmail(["d.piccinni@pl3group.com",richiedenteInfo.email], "Offerta Inviata", "e90d674f-b3b2-4a10-977b-8fa969704c90", {
                        controllore: "Monica Podavite",
                        motivo,
                          cliente: itemInfo.cliente,
                          titolo: itemInfo.titolo,
                          oggettoOfferta: itemInfo.oggettoOfferta,
                          dataRichiesta: itemInfo.dataRichiesta,
                          richiedente
                    });
                    break;
                case "step2":
                    sendCustomEmail(["d.piccinni@pl3group.com",richiedenteInfo.email], "Offerta Inviata", "e90d674f-b3b2-4a10-977b-8fa969704c90", {
                        controllore: userInfo.name,
                        motivo,
                        cliente: itemInfo.cliente,
                        titolo: itemInfo.titolo,
                        oggettoOfferta: itemInfo.oggettoOfferta,
                        dataRichiesta: itemInfo.dataRichiesta,
                        richiedente
                    });
                    break;
            }
        }
        break;
}

















