import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useMemo, useState } from 'react';
import NationList from '../pages/NationList';
import Headerbar from '../layout/Headerbar';
import Login from '../pages/Login';
import Join from '../pages/Join';

const OneRoutes = () => {
    const category = useMemo(() => [
        {
            text: "국가 조회",
            path: "/nation/allNation"
        }
    ], []);
    const [pageList] = useState(category);
    return(
        <Router>
            <Headerbar pageList={pageList} />
            <Routes>
                <Route path='/auth/join' element={<Join />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/nation/allNation' element={<NationList />} />
            </Routes>
        </Router>
    )
}

export default OneRoutes;