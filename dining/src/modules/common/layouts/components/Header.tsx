import { LargeScreenNav } from "./LargeScreenNav"
import { SmallScreenNav } from "./SmallScreenNav"
import { UserLogin } from "./UserLogin"
import React from "react"




export const Header = () => {
    return (
        <header className="flex  space-x-2 md:space-x-10 bg-black p-10 justify-between items-center">
            <div className="flex space-x-6 items-center">
                <a href="/">
                    <img src="http://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
                        width={100}
                        height={100}
                        className="cursor-pointer object-contain"
                    />
                </a>
                <LargeScreenNav />
            </div>
            <div>
                <UserLogin />
            </div>
            <SmallScreenNav />
        </header>
    )
}