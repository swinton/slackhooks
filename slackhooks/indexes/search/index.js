function (doc) {
    index("channel", doc.channel_name);
    index("from", doc.user_name);
    index("text", doc.text);
}
