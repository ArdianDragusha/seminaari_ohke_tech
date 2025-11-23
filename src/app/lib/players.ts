export type Player = {
    id: string;
    name: string;
    club: string;
    position: string;
};

export const players: Player[] = [
    { id: "1", name: "Erling Haaland", club: "Manchester City", position: "Hyökkääjä" },
    { id: "2", name: "Kevin De Bruyne", club: "Napoli", position: "Keskikenttä" },
    { id: "3", name: "Virgil van Dijk", club: "Liverpool", position: "Toppari" },
    { id: "4", name: "Edon Zhegrova", club: "Juventus", position: "Hyökkääjä" },
];

export function getPlayers(): Player[] {
    return players;
}

export function getPlayerById(id: string): Player | undefined {
    return players.find((p) => p.id === id);
}
