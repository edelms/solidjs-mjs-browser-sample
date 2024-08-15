import { Component } from "solid-js";

export type Extension = {
    name: string;
    version: string;
    components: ExtensionComponent[];
}

export type ExtensionComponent = {
    name: string;
    component: Component;
}