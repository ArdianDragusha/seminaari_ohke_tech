import { getPlayers } from "@/app/lib/players";

export const revalidate = 10;

export default function PlayersPage() {
    const players = getPlayers();

    return (
        <main>
            <h1>Pelaajalista</h1>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <a href={`/players/${player.id}`}>{player.name}</a> - {player.club}
                    </li>
                ))}
            </ul>
        </main>
    );
}
