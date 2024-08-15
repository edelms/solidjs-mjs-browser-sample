import { createSignal, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { ExtensionComponent } from "@dyn/shared";
import { ExtensionPicker } from "./ExtensionPicker";


const queryClient = new QueryClient();

type Props = {
    message: string;
}

export const Test = (props: Props) => {

    const [selected, setSelected] = createSignal<ExtensionComponent | undefined>();

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <p>Message in SolidJS: {props.message}</p>
                <hr />
                <Show when={selected()} fallback={<p>Select extension component below!</p>}>
                    {selectedComponent => (
                        <>
                            <h3>Selected: {selectedComponent().name}</h3>
                            <Dynamic component={selectedComponent().component} />
                        </>
                    )}
                </Show>
                <hr />
                <ExtensionPicker onSelect={setSelected} />
            </div>

        </QueryClientProvider>
    );
}
