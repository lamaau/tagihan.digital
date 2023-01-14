import { prisma } from "../../packages/prisma";

export const post = async ({ request }) => {
  const { email } = await request.json();

  try {
    const subs = await prisma.subscribers.create({
      data: {
        email: email,
      },
    });

    return new Response(JSON.stringify({ success: true, ...subs }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
