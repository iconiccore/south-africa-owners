import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { name, email, phone } = await req.json();

    try {
        const response = await fetch(
            "https://api.hubapi.com/crm/v3/objects/contacts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer pat-eu1-6d35de00-d8fe-4cf8-b362-f00510e3a750`,
                },
                body: JSON.stringify({
                    properties: {
                        firstname: name,
                        email: email,
                        phone: phone,
                        website: "https://iconiccore.com",
                    },
                }),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            return NextResponse.json({
                message: "Internal Server Error.",
                status: 500,
                error: error.message,
            });
        }

        const data = await response.json();
        return NextResponse.json({
            status: 200,
            message: "success",
            data: data,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error.",
            status: 500,
            data: "Internal Server Error.",
        });
    }
}
