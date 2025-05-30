import './styles/index.scss'
import {classNames} from "@shared/lib/className/className";
import {useTheme} from "@app/providers/ThemeProvider";
import AppRouter from "@app/providers/router";
import {Navbar} from "@widgets/Navbar";
import {Sidebar} from "@widgets/Sidebar/ui/Sidebar/Sidebar";
import {Suspense, useState,} from "react";
import {Modal} from "@shared/ui/Modal/Modal";
export default function App() {



const { theme } = useTheme() ;

const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <button onClick={() => setIsOpen(true)}>Открыть модалку</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <h2>Я модалка</h2>
                    <p>Контент внутри</p>
                </Modal>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}
