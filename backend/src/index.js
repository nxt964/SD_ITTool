const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

// Connection URI
const DB = process.env.MONGO_URI
        .replace("<MONGO_USER>", process.env.MONGO_USER)
        .replace("<MONGO_PASSWORD>", process.env.MONGO_PASSWORD);

// Create a new MongoClient
const mongoClient = new MongoClient(DB, {});

// Connect to the server
const connectDB = async () => {
  try {
    await mongoClient.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await mongoClient.close();
  }
};

connectDB();
