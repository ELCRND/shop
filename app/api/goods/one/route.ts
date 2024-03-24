import clientPromise from "@/lib/mongodb";
import { getDbAndReqBody } from "@/lib/utils/api-routes";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const isValid = ObjectId.isValid(reqBody.productId);

    if (!isValid) {
      return NextResponse.json({
        message: "Wrong product id",
        status: 404,
      });
    }

    const productItem = await db
      .collection(reqBody.category)
      .findOne({ _id: reqBody.productId });

    return NextResponse.json({ status: 200, productItem });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
