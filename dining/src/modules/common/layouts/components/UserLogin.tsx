export const UserLogin = () => {
    return (
        <ul className="hidden space-x-4 md:flex"> 
       <a href="/login"> <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-150 hover:text-red-700">Login</li></a>
        <a href="/signup"><li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-150 hover:text-red-700">Sign Up</li></a>
        </ul>
    )
}