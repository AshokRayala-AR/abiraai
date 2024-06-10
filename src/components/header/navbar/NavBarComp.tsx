import { NavLink } from "react-router-dom";
import { NavBarLiData } from "./NavBarLiData";

function NavBarComp() {
    return(
        <nav className="bg-[#000] flex justify-around items-center text-white p-2 py-4" > 
            <div className="flex flex-col items-center justify-center">
                <p className="text-4xl font-semibold text-[#54f4fc] font-arima">Present Software</p>
                <p className="">Journey Towards Future</p>
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