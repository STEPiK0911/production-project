import './styles/index.scss'
import {classNames} from "@shared/lib/className/className";
import {useTheme} from "@app/providers/ThemeProvider";
import AppRouter from "@app/providers/router";
import {Navbar} from "@widgets/Navbar";
import {Sidebar} from "@widgets/Sidebar/ui/Sidebar/Sidebar";
import {Suspense,} from "react";
export default function App() {



const { theme } = useTheme() ;

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}
