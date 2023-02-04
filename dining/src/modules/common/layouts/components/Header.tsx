export const Header = () => {
    return (
       <div className="flex justify-between bg-black items-center ">
        <div className="p-3">
            <p className="text-white text-2xl font-bold font-mono">Movie<span className="text-red-600 text-1xl font-serif">T</span></p>
        </div>
        <ul className="flex space-x-6 p-5 text-white">
            <li className="hover:text-black ease-in duration-120 cursor-pointer ">Home</li>
            <li className="hover:text-black ease-in duration-120 cursor-pointer ">Profile</li>
            <li className="hover:text-black ease-in duration-120 cursor-pointer ">Testing</li>
        </ul>
       </div>
    )
}