import { HashRouter, Route, Routes } from 'react-router-dom';
import RatePage from '../Components/Pages/RatePage/RatePage';
import ThanksPage from '../Components/Pages/ThanksPage/ThanksPage';

function Rotas() {
    return (
        <Routes>
            <Route element={<RatePage/>} exact path={'/'}/>
            <Route element={<ThanksPage/>} exact path={'/thanks'}/>
        </Routes>
    );
}

export default Rotas;