import { MongoClient } from 'mongodb';

const connectionString = process.env.customKey as string;

export const getMongoConnection = async (collection: string) => {
  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  const dataCollection = db.collection(collection);
  return { client, dataCollection };
};