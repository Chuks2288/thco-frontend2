import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineLogout } from 'react-icons/hi';
import "../styles/SidebarStyles.scss";
import { SidebarMenu } from '../data';
import { thco } from '../images';

const Sidebar = () => {

    const location = useLocation();
    const { drawer }: any = useSelector((state: any) => state.sidebar);


    return (
        <div className='sidebar__section'>
            <div className="logo">
                <div className="logo__image">
                    <img src={thco} alt="thco" />
                </div>
                <h2 className='logo__word'>Metrix</h2>
            </div>

            <ul className='menu__items'>
                {SidebarMenu.map((menu, key) => {

                    const isActive = location.pathname === menu.path
                    return (
                        <Link to={menu.path} className={`menu__item ${isActive && "active"}`} key={key}

                        >
                            <span className='menu__icon'>{< menu.icon />}</span>
                            <span className='menu__title'>{menu.title}</span>
                        </Link>
                    )
                })}
                <div className="logout">
                    < HiOutlineLogout className='logout__icon' />
                    <span>Logout</span>
                </div>
            </ul>

        </div>
    )
}

export default Sidebar