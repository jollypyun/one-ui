import { Link, useLocation } from "react-router-dom";

const Headerbar = (props) => {
    const location = useLocation()
    const urlPath = location.pathname.split('/')
    const {pageList} = props

    return (
        <div>
            <h1>목록</h1>
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
        </div>
    )
}

export default Headerbar;