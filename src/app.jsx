import { app } from "hyperapp";
import { Counter } from "./components";

// State
const state = {
  count: 0
};

// Actions
const actions = {
  down: v => state => ({ count: state.count - v }),
  up: v => state => ({ count: state.count + v }),
  adown: v => (state, actions) => setTimeout(() => actions.down(v), 1000),
  aup: v => (state, actions) => setTimeout(() => actions.up(v), 1000)
};

// Render
window.appCounter = app(
  state,
  actions,
  Counter,
  document.getElementById("counter")
);
