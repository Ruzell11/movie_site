import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "antd"
import Button from "antd/es/button";
import { faUser } from "@fortawesome/free-regular-svg-icons";

 
export const Header = () => {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Login
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                   Sign Up
                </a>
            ),
        },
        
    ];
    return (
        <div className="flex justify-between bg-black items-center ">
            <div className="p-3 cursor-pointer">
               <a href="/"> <p className="text-white text-2xl font-bold font-serif">Movie<span className="text-red-700 text-1xl font-serif">T</span></p></a>
            </div>
            <ul className="flex space-x-4 font-semibold text-white px-3 cursor-pointer">
              <a href="/login">  <li>Login</li></a>
                <a href="/signup"><li>Sign Up</li></a>
            </ul>
        </div>
    )
}