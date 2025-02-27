import React from "react";
import ReactDOM from "react-dom"


const header = React.createElement("div", {}, [React.createElement("div", { id: "header2" }, [React.createElement("div", { id: "header2" }, React.createElement("h1", { id: "header2" }, "Frist heading"), React.createElement("div", { id: "header2" }, React.createElement("h1", { id: "header2" }, "second heading"))), React.createElement("div", { id: "header2" }, "ss")]), React.createElement("div", { id: "header2" }, React.createElement("h1", { id: "3rd" }, "thrid heading"))])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(header)

