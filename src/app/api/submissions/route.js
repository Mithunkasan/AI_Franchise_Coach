// app/api/submissions/route.js
import { prisma } from "../../../lib/prisma";

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic server-side validation
    if (!data.fullName) {
      return new Response(JSON.stringify({ error: "fullName is required" }), { status: 400 });
    }

    const submission = await prisma.submission.create({
      data: {
        fullName: data.fullName,
        whatsapp: data.whatsapp || null,
        city: data.city || null,
        businessName: data.businessName || null,
        category: data.category || null,
        revenue: data.revenue || null,
        yearsInBusiness: data.yearsInBusiness || null,
        outlets: data.outlets || null,
        systemised: data.systemised || null,
        replicable: data.replicable || null,
        startTime: data.startTime || null,
      },
    });

    return new Response(JSON.stringify({ success: true, id: submission.id }), { status: 201 });
  } catch (err) {
    console.error("API error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
