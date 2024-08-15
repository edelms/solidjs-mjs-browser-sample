import { createQuery } from "@tanstack/solid-query"

export const createPokemonQuery = () => {
    return createQuery(() => ({
        queryKey: ['pokemon'],
        queryFn: async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon');
            if (res.ok) {
                const json = await res.json();
                return json;
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }
    }));
}
