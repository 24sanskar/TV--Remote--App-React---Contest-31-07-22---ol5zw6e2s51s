import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));
function myFunction(value){
    console.log(value);
document.getElementById('container').innerHTML=value;
}
