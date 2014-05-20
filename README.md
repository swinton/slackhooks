# Slackhooks


## What the?!

[Slack](https://slack.com/), in case you hadn't heard, is an awesome real-time messaging system built for modern teams.

What we have here is a _nifty_ way to back-up your Slack chat to a [CouchDB](http://couchdb.apache.org/) instance.


## But, why?

I happen to like both Slack (for chat) and CouchDB (for data). So I thought I'd plug these 2 together.

Means I can (sometime) write my own search indexes etc. for my team's Slack archive (yup, what a geek).


## OK, so how do I use this?

Glad you asked.

Well for starters, you need a [Slack](https://slack.com/) account, and a CouchDB instance (ahem, [Cloudant](https://cloudant.com/)).

Create a dedicated database in CouchDB, and push this CouchApp to it (`couchapp push`).

Next, in Slack, create an [outgoing webhook](https://my.slack.com/services/new/outgoing-webhook), from a channel of your choosing to the `/_design/slackhooks/_update/new` update function contained in this CouchApp.

That's it! Now, when you post a message in Slack, it'll automatically get saved in your CouchDB too! :grin:
