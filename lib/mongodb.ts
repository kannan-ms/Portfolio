import { MongoClient } from 'mongodb';

type MongoClientPromise = Promise<MongoClient>;

const options = {};

let _clientPromise: MongoClientPromise | null = null;

export function getMongoClient(): MongoClientPromise {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please add your MongoDB URI to .env.local');
  }

  if (process.env.NODE_ENV === 'development') {
    const g = global as unknown as { _mongoClientPromise?: MongoClientPromise };
    if (!g._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      g._mongoClientPromise = client.connect();
    }
    return g._mongoClientPromise as MongoClientPromise;
  }

  if (!_clientPromise) {
    const client = new MongoClient(uri, options);
    _clientPromise = client.connect();
  }
  return _clientPromise;
}

export default getMongoClient;
