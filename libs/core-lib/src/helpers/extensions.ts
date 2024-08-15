import { createSignal } from "solid-js";
import { Extension } from "@dyn/shared";

const [extensions, setExtensions] = createSignal<Extension[]>([]);

export const registerExtension = (extension: Extension) => {
    setExtensions(x => [...x, extension]);
};

export { extensions };


