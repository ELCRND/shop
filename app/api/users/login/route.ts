import clientPromise from "@/lib/mongodb";
import {
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from "@/lib/utils/api-routes";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { reqBody, db } = await getDbAndReqBody(clientPromise, req);
  const user = await findUserByEmail(db, reqBody.email);

  if (!user) {
    return NextResponse.json({
      errorMessage: "Пользователь не существует",
    });
  }
  if (!bcrypt.compareSync(reqBody.password, user.password)) {
    return NextResponse.json({
      errorMessage: "Неправильный пароль!",
    });
  }

  const tokens = generateTokens(reqBody.name, reqBody.email);
  return NextResponse.json(tokens);
}
