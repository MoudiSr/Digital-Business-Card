import React from "react"
import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import twitter from "./images/twitter.svg"
import github from "./images/github.svg"

export default function Footer() {
    return (
        <div className="bg-[#161619] h-[64px] p-4 rounded-b-xl">
            <div className="flex justify-center ml-3">
                <img src={facebook} className="social--icons" />
                <img src={instagram} className="social--icons" />
                <img src={twitter} className="social--icons" />
                <img src={github} className="social--icons" />
            </div>
        </div>
    )
}