import { createStarwarsQuery } from "../data/starwars-api";

type Props = {};

export const ExtensionA = (props: Props) => {
    const starwars = createStarwarsQuery();

    return (
        <div>
            <h4>Component A from extension-demo2</h4>
            <p>Status: {starwars.status}</p>
            <pre>{JSON.stringify(starwars.data, null, 2)}</pre>
        </div>
    );
}
