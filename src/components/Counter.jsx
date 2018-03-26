import { h } from "hyperapp";
import { DirectButtons, OneButtons } from "./";

// View
export const Counter = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <OneButtons actions={actions} />
    <DirectButtons />
  </div>
);
