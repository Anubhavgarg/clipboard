const assert = require('assert');
const crypto = require("crypto");

const {deterministicPartitionKey} = require('./index');

describe('refactored deterministicPartitionKey', function() {
    it('returns 0 with empty arguments', function() {
        assert.equal(deterministicPartitionKey(), "0");
      });
    
      it('returns a hash value based on the input if partition key is not present', function() {
        const obj = {foo: "bar"};
        const hash = crypto.createHash('sha3-512').update(JSON.stringify(obj)).digest('hex');
        assert.equal(deterministicPartitionKey(obj), hash);
      });
    
      it('should return the partition key if key is present in the event', () => {
        const event = { partitionKey: 'test' };
        const key = deterministicPartitionKey(event);
        assert.strictEqual(key, 'test');
      });
      it('returns partition key value based on the input if partition key and other keys also present', function() {
        const event = { partitionKey: 'test', "foo": "bar" };
        assert.equal(deterministicPartitionKey(event), "test");
      });
  });
