import SVG from "./Common/SVG";
import { Link } from "react-router";

function Header(props) {

    return (
        <header className="flex justify-between items-center bg-dark text-white border border-borderdark rounded-xl p-6 group-[.app]/light:bg-white group-[.app]/light:border-borderlight ">
            <div className="text-[1.4rem] font-semibold group-[.app]/light:text-black"><Link to={"/"}>🔴 Extensions</Link></div>
            <div className="toggle-mode group-[.app]/light:text-black" >
                <button
                    id="toggleMode"
                    onClick={() => props.handleThemeMode()}
                    className="p-2 rounded-lg border-none cursor-pointer bg-inherit text-inherit font-medium outline-none"
                >
                    <SVG />
                </button>
            </div>
        </header>

    );
}

export default Header;