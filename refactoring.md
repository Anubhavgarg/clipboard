# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

exports.deterministicPartitionKey = (event) =>{
 let candidate = event ? event.partitionKey ? event.partitionKey:
 crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex") : "0";
 return candidate;
};

## Your Explanation Here

1. I have to check if parition key is coming or not in the event and for that we have to first check if event is coming or not as it will be undefined. 

2. First I am checking if event is there or not, and ? is like a condition. If we write a ? b:c. It means if a true then take b else c. I am checking if event is there then again check if partition key is coming or not.

3. If event is not coming, then we are assigning to TRIVIAL_PARTITION_KEY that's why in the last i have put "0".

4. Suppose event is coming then it will check if partitionKey is coming in event, suppose if partitionKey is coming then assigning the same to that variable else json stringify hashing and converting.

5. We have removed the check as max length cannot be more than 256 characters of hashing.