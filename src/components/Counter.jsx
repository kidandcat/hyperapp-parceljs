import { h } from "hyperapp";
import { DirectButtons, OneButtons } from "./";

// View
export const Counter = (state, actions) => (
  <div class="centered">
    <h1 class="text-centered">{state.count}</h1>
    <OneButtons actions={actions} />
    <DirectButtons />
  </div>
);
