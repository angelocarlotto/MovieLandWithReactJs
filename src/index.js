import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
//ReactDOM.render(<App/>, document.getElementById("root"));
