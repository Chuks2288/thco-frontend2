import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sidebar, Header } from '../components';
import { childrenProps } from '../interface/general';
import "../styles/LayoutStyles.scss";
import { toggleDrawer, hideDrawer, showDrawer } from '../redux/features/SidebarSlice';


const Layout = ({ children }: childrenProps) => {



    const dispatch = useDispatch();
    const { drawer }: any = useSelector((state: any) => state.sidebar);
    const [screenSize, setScreenSize] = useState(900);



    useEffect(() => {
        if (drawer && screenSize <= 900) {
            dispatch(hideDrawer());
        }
        else {
            dispatch(showDrawer());
        }
    }, [screenSize])




    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='main'>
                <div className="layout">
                    {drawer &&
                        <div className="sidebar">
                            <Sidebar />
                        </div>
                    }
                    <div className="content">
                        <div className="header">
                            <Header />
                        </div>
                        <div className="body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout