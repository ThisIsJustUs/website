import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

import { env } from "@/env";

type WebhookPayload = {
  slug?: {
    current: string;
  };
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?.slug?.current) {
      const message = "Bad Request: Missing slug";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    const path = `/writing/${body.slug.current}`;
    console.log("Revalidating path:", path);

    revalidatePath(path);
    revalidatePath("/writing");

    const message = `Revalidated: ${path}`;
    return NextResponse.json({ message });
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      return new Response(err.message, { status: 500 });
    }

    return new Response("An unknown error occurred", { status: 500 });
  }
}
