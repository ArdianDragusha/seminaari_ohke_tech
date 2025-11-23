import { getPlayerById, getPlayers } from "@/app/lib/players";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const players = getPlayers();
    return players.map((p) => ({ id: p.id }));
}

export default async function PlayerPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const player = getPlayerById(id);

    if (!player) return notFound();

    return (
        <main>
            <h1>{player.name}</h1>
            <p>Seura: {player.club}</p>
            <p>Pelipaikka: {player.position}</p>
            <a href="/players">← Takaisin</a>
        </main>
    );
}
