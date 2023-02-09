import React from "react"

export default function Body() {
    return (
        <div>
            <div className="pr-8 pl-8 pb-8">
                <div className="flex mt-4 ">
                    <button className="bg-white text-[#374151]">Email</button>
                    <button className="bg-[#5093E2]  text-white ml-auto">LinkedIn</button>
                </div>
                
                <div className="mt-8">
                    <h1 className="text-white font-extrabold">About</h1>
                    <p className="text-white">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h1 className="text-white font-extrabold mt-8">Interests</h1>
                    <p className="text-white">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </div>
    )
}