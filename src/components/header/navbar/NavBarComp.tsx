import { NavLink } from "react-router-dom";
import { NavBarLiData } from "./NavBarLiData";
import abiralogo from "../../../assets/abiralogo.png"

function NavBarComp() {
    return(
        <nav className="bg-[rgb(0,0,0)] flex justify-around items-center text-white p-2 py-4" > 
        <div className="flex gap-6">
        <img src={abiralogo} alt="logo" className="w-16 h-18 "/>
            
        </div>
            <div>
                <ul className="flex gap-12">
                    {NavBarLiData.map((item, index) => {
                        return(
                            <li key={index} className="text-xl font-normal">
                                <NavLink to={item.path}>{item.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBarComp;