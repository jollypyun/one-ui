import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout';
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
        <Router basename={process.env.PUBLIC_URL}>
            <Headerbar pageList={pageList} />
            <DefaultLayout pageList={pageList}>
                <Routes>
                    <Route path='/nation/allNation' element={<NationList />} />
                </Routes>
            </DefaultLayout>
        </Router>
    )
}

export default OneRoutes;