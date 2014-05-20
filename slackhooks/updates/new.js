function (doc, req) {
    doc = req.form;
    doc._id = req.uuid;
    return [doc, "Created"];
}
