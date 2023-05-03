import { MongoClient } from 'mongodb';

const connectionString = process.env.customKey;

export const getMongoConnection = async () => {
  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  const projectsCollection = db.collection('relevant-mongo-collection');
  return { client, projectsCollection };
};
