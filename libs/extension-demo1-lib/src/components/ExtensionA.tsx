import { createPokemonQuery } from "../data/pokemon-api";

type Props = {};

export const ExtensionA = (props: Props) => {
    const pokemon = createPokemonQuery();

    return (
        <div>
            <h4>Component A from extension-demo1</h4>
            <p>Status: {pokemon.status}</p>
            <pre>{JSON.stringify(pokemon.data, null, 2)}</pre>
        </div>
    );
}
