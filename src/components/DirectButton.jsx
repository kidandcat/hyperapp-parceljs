import { h } from "hyperapp";

// Lazy Component (return a function that will be a view)
const DirectButton = ({ action }, children) => (state, actions) => (
  <button onclick={() => actions[action](1)}>{children}</button>
);

export const DirectButtons = () => (
  <div>
    <p>Direct Buttons</p>
    <DirectButton action="up">+</DirectButton>
    <DirectButton action="down">-</DirectButton>
  </div>
);
