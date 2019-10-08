var orm = require("./config/orm.js");


orm.selectAll("party_name", "parties");

orm.insertOne("parties", "party_type", "grown-up")
orm.updateOne("client_id", "clients", "parties")