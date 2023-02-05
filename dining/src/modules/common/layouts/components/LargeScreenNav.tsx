
import React from "react"
export const LargeScreenNav = () => {
    return (
        <>
        <ul className="hidden space-x-4 md:flex"> 
        <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-150 hover:text-red-700">Home</li>
        <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-150 hover:text-red-700">Tv Shows</li>
        <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-150 hover:text-red-700">Movies</li>
        <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-150 hover:text-red-700">New & Popular</li>
        <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-150 hover:text-red-700">My Favorites</li>
        </ul>
        </>
    )
}