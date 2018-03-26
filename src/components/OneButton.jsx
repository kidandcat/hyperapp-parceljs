import { h } from "hyperapp";

// Component
const OneButton = ({ action }, children) => (
  <button onclick={() => action(1)}>{children}</button>
);

export const OneButtons = ({ actions }) => (
  <div>
    <p>One Buttons</p>
    <OneButton action={actions.aup}>+</OneButton>
    <OneButton action={actions.adown}>-</OneButton>
  </div>
);
