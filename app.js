import React from "react";
import ReactDOM from "react-dom/client"

//REACT -  React.createElement-js Object => HTML element
header = React.createElement("h1", {}, "This is react code")
root = ReactDOM.createRoot(document.getElementById("root1"))
root.render(header)


// JSX -  jsx =>Babel transpiles it to React.CreateElement-js Object => HTML element 
root = ReactDOM.createRoot(document.getElementById("root2"))
const jsxHeading = <h1> This is JSX code</h1>
root.render(jsxHeading)


//React Element
const heading = (
    <h1 className="head" tabIndex="5">
        This is react element
    </h1>
)
root = ReactDOM.createRoot(document.getElementById("root3"))
root.render(heading)


//function component
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading" > This is function combonent</h1>
    </div>
)
root = ReactDOM.createRoot(document.getElementById("root4"))
root.render(<HeadingComponent />)


//component composition
const Title = () => (
    <h1>Get this data</h1>
)
const Headingomponent2 = () => (

    <div id="container">
        <Title />
        {/* or
        <Title></Title>
        or
        {Title} */}
        <h1>Place there</h1>
    </div>
)
root = ReactDOM.createRoot(document.getElementById("root5"))
root.render(<Headingomponent2 />)


//write js in HTMl
const data = 1024
const Headingomponent3 = () => (
    
    <div>
        <h1>{data}</h1>
    </div>
)
root = ReactDOM.createRoot(document.getElementById("root6"))
root.render(<Headingomponent3 />)