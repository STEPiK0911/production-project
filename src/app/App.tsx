import './styles/index.scss'
import {classNames} from "@shared/lib/className/className";
import {useTheme} from "@app/providers/ThemeProvider";
import AppRouter from "@app/providers/router";
import {Navbar} from "@widgets/Navbar";
import {Sidebar} from "@widgets/Sidebar/ui/Sidebar/Sidebar";
import {Suspense, useEffect, useState,} from "react";
import {Modal} from "@shared/ui/Modal/Modal";
import {useDispatch} from "react-redux";
import {userAction} from "@entities/User";
export default function App() {

const dispatch = useDispatch();

const { theme } = useTheme() ;

    useEffect(() => {
        dispatch(userAction.initAuthData())
    }, []);

const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
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
