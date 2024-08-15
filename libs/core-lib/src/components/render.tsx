import { createSignal } from "solid-js";
import { render } from "solid-js/web";
import { Test } from "./Test";

type Props = Parameters<typeof Test>[0];

export type RenderedView = {
    update(props: Props): void;
    dispose(): void;
};

export const renderView = (div: HTMLElement, props: Props): RenderedView => {
    const [properties, setProperties] = createSignal({ ...props });
    const dispose = render(() => <Test {...properties()} />, div);
    return {
        update: (newProps: Props) => setProperties({ ...newProps }),
        dispose
    };
};
