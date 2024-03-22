import { MongoClient } from "mongodb";

const clientPromise = MongoClient.connect(
  process.env.NEXT_PUBLIC_DB_URL as string,
  {
    maxPoolSize: 5,
  }
);

export default clientPromise;
