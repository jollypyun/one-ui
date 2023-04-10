import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DefaultLayout = (props) =>  {
    const { pageList, children } = props;
    const [urlPath, setUrlPath] = useState("");
    const location = useLocation();

    const changePath = useCallback(() => {
        const pathName = location.pathname;
        const path = pathName.split('/');

        for (let i = 0; i < pageList.length; i++) {
            setUrlPath(pageList[i].text);
        } 
        console.log(pageList);
    }, [location, setUrlPath, pageList]);

    useEffect(() => {
        changePath();
    }, [changePath, location]);

    return (
        <>
            <div>
                <h1>{urlPath}</h1>
            </div>
            <div>{children}</div>
        </>
    );
}

export default DefaultLayout;