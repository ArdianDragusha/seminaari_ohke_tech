import { NextResponse } from "next/server";
import { getPlayers } from "src/app/lib/players";

export async function GET() {
    const players = getPlayers();
    return NextResponse.json(players);
}
