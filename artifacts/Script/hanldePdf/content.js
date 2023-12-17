const data = req.body;

data.map(async (item) => {
    await entities.tableofferte.createQueryBuilder()
    .update()
    .set({"status": item.status, "pdfOfferta": item.pdfOfferta , "nrOffertaSap":item.nrOffertaSap})
    .where("id = :id", { id: item.id })
    .execute();
});
