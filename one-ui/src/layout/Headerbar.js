import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Headerbar = (props) => {
    const location = useLocation()
    const urlPath = location.pathname.split('/')
    const {pageList} = props

    if(location.pathname === "/login" || "/join") return null;
    return (
        <div>
            <ul>
                {pageList.map((item) => {
                    const {text, path} = item;
                    return ( 
                        <li key = {text}
                            className={`${path.indexOf(urlPath[1]) > -1 && "active"}`}
                        >
                            <Link key={`${text}`} to={path}>
                                {text}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Link key={`Login`} to={"/auth/login"}>
                <Button>Login</Button>
            </Link>
        </div>
    )
}

export default Headerbar;