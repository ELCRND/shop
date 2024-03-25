import { Db, MongoClient } from "mongodb";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getRandomValue, shuffle } from "./common";

export const getDbAndReqBody = async (
  clientPromise: Promise<MongoClient>,
  req: Request | null
) => {
  const db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME);

  if (req) {
    const reqBody = await req.json();
    return { db, reqBody };
  }

  return { db };
};

export const getNewAndBestsellerGoods = async (db: Db, fieldName: string) => {
  const clothes = await db.collection("cloth").find().toArray();
  const accessories = await db.collection("accessories").find().toArray();
  const randomProductId = getRandomValue(22);
  return shuffle([
    ...clothes
      .filter((item) => item[fieldName])
      .slice(randomProductId, randomProductId + 2),
    ...accessories
      .filter((item) => item[fieldName])
      .slice(randomProductId, randomProductId + 2),
  ]);
};

export const generateTokens = (name: string, email: string) => {
  const accessToken = jwt.sign(
    {
      name,
      email,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    {
      expiresIn: "10m",
    }
  );
  const refreshToken = jwt.sign(
    {
      email,
    },
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
    {
      expiresIn: "30d",
    }
  );
  return { accessToken, refreshToken };
};

export const createUsersAndGenerateTokens = async (
  db: Db,
  regBody: { name: string; password: string; email: string }
) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(regBody.password, salt);

  await db.collection("users").insertOne({
    name: regBody.name,
    password: hash,
    email: regBody.email,
    image: "",
    role: "user",
  });

  return generateTokens(regBody.name, regBody.email);
};

export const findUserByEmail = async (db: Db, email: string) => {
  return db.collection("users").findOne({ email });
};
