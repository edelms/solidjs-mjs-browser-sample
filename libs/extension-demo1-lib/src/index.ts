import { Extension } from "@dyn/shared";

import { ExtensionA } from "./components/ExtensionA";
import { ExtensionB } from "./components/ExtensionB";


export default {
    name: 'Extension Demo 1',
    version: '1.0.0',
    components: [
        {
            name: '1A',
            component: ExtensionA,
        },
        {
            name: '1B',
            component: ExtensionB
        },
    ],
} satisfies Extension;
