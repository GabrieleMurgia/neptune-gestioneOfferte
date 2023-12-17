const data = req.body;


    await entities.tableofferte.createQueryBuilder()
    .update()
    .set({"status": data.status,"nrOffertaSap":data.nrOffertaSap})
    .where("id = :id", { id: data.id })
    .execute();

