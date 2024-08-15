import { Extension } from "@dyn/shared";

import { ExtensionA } from "./components/ExtensionA";
import { ExtensionB } from "./components/ExtensionB";


export default {
    name: 'Extension Demo 2',
    version: '1.0.0',
    components: [
        {
            name: '2A',
            component: ExtensionA,
        },
        {
            name: '2B',
            component: ExtensionB
        },
    ],
} satisfies Extension;
