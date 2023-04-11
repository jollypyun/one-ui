import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useMemo, useState } from 'react';
import NationList from '../pages/NationList';
import Headerbar from '../layout/Headerbar';

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
                <Route path='/nation/allNation' element={<NationList />} />
            </Routes>
        </Router>
    )
}

export default OneRoutes;