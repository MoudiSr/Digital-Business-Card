import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

function App(){
    return (
        <div className="w-[317px] bg-[#1A1B21] rounded-xl">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))