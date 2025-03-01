import React from "react";
import ReactDOM from "react-dom/client"

//REACT -  REact.createElement-js Object => HTML element
header = React.createElement("h1", {}, "This is react code")
root = ReactDOM.createRoot(document.getElementById("root"))
root.render(header)


// JSX -  jsx => React.CreateElement-js Object => HTML element 
root = ReactDOM.createRoot(document.getElementById("root2"))
const jsxHeading = <h1> This is JSX code</h1>
root.render(jsxHeading)

