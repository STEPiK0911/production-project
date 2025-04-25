import './styles/index.scss'
import {classNames} from "@shared/lib/className/className";
import {useTheme} from "@app/providers/ThemeProvider";
import AppRouter from "@app/providers/router";
import {Navbar} from "@widgets/Navbar/ui/Navbar";
export default function App() {

const { theme, toggleTheme } = useTheme() ;

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button className="button" onClick={toggleTheme}>vsdvdsv</button>
            <AppRouter/>
        </div>
    )
}
