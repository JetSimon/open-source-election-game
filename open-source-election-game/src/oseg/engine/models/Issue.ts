interface Issue {
    id: number,
    name: string,
    description: string;
    stances : string[];
    stanceDescriptions : string[];
}

export type { Issue };