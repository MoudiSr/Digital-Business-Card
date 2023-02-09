import React from "react"
import logo from "./images/logo5.jpg"

export default function Header() {
    return (
        <div>
            <img src={logo} className="rounded-t-xl h-[317px]" />
            <div class="pt-8 pr-8 pl-8">
                <div className="grid place-items-center">
                    <h1 className="text-2xl text-white font-extrabold">Mohammad Sr</h1>
                    <h4 className="text-[#F3BF99]">Frontend Developer</h4>
                    <p className="text-xs text-white mt-2">mhmmdsr.website</p>
                </div>
            </div>
        </div>
    )
}