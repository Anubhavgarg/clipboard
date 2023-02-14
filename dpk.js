const crypto = require("crypto");

exports.deterministicPartitionKey = (event) =>{
 let candidate = event ? event.partitionKey ? event.partitionKey:
 crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex") : "0";
 return candidate;
};