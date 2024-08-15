// Rebundle common external dependencies

// Solid-query checks for process.env, ensure something is there
const w: any = window;
if (!w.process) w.process = {};
if (!w.process.env) w.process.env = {};

// export * from 'solid-js';
export {
    createSignal,
    createMemo,
    createEffect,
    createRenderEffect,
    createContext,
    createComputed,
    createResource,
    useContext,
    batch,
    on,
    onCleanup,
    onMount,
    untrack
} from 'solid-js';
export * from 'solid-js/web';

export { QueryClient, QueryClientProvider, createQuery, createMutation } from '@tanstack/solid-query';

export { clsx } from 'clsx';
