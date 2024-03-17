const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Database Name
const dbName = "bdinsert";

// Collection Name
const collectionName = "posts_in";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Find documents
    const documents = await collection.find({}).toArray();
    console.log("All documents:");
    console.log(documents);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);