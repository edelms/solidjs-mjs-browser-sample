import { createQuery } from "@tanstack/solid-query"

export const createStarwarsQuery = () => {
    return createQuery(() => ({
        queryKey: ['starwars'],
        queryFn: async () => {
            const res = await fetch('https://swapi.dev/api/people/1');
            if (res.ok) {
                const json = await res.json();
                return json;
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }
    }));
}
