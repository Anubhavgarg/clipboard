const {deterministicPartitionKey} = require("./dpk");

module.exports = {
    deterministicPartitionKey
}

console.log(deterministicPartitionKey({}));