import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import {useTheme} from "./theme/useTheme.ts";
import {className} from "./helpers/className/classNmae.ts";
export default function App() {

const { theme, toggleTheme } = useTheme() ;

    return (
        <div className={className('app', {}, [theme])}>
            <button className="button" onClick={toggleTheme}>vsdvdsv</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>о нас</Link>
            <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </div>
    )
}
