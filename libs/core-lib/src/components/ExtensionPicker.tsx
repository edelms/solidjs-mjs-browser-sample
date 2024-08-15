import { For } from "solid-js";
import { ExtensionComponent } from "@dyn/shared";
import { extensions } from "../helpers/extensions";

type Props = {
    onSelect(component: ExtensionComponent): void;
};

export const ExtensionPicker = (props: Props) => {
    return (
        <div>
            <h3>Extensions</h3>
            <ul>
                <For each={extensions()}>
                    {extension => (
                        <li>
                            <h4>{extension.name} <small>{extension.version}</small></h4>
                            <ul>
                                <For each={extension.components}>
                                    {component => (
                                        <li>
                                            <button type='button' onClick={() => props.onSelect(component)}>
                                                {component.name}
                                            </button>
                                        </li>
                                    )}
                                </For>
                            </ul>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
}
