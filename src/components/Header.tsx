import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/Header.scss";
import { MdOutlineKeyboardArrowDown, MdNotifications } from 'react-icons/md';
import { profile } from '../images';
import { GoHomeFill } from 'react-icons/go';
import { toggleDrawer } from '../redux/features/SidebarSlice';

const Header = () => {

    const dispatch = useDispatch();
    const { menu }: any = useSelector((state: any) => state.direction)


    const sidebarToggle = () => {
        dispatch(toggleDrawer())
    }

    return (
        <div className='header__main'>
            <div className="header__section">
                <h3>Dashboard</h3>
                <div className="header__profile">
                    <div className="header__profile__arrow">
                        <span>Nanny's Shop</span>
                        <MdOutlineKeyboardArrowDown className='arrow__down' />
                    </div>
                    <div className="header__profile__notification">
                        <MdNotifications />
                    </div>
                    <div className="header__profile__image">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="header__menu">
                <div className="header__menu__icon"
                    onClick={sidebarToggle}
                >
                    <GoHomeFill />
                </div>
                <span className='header__menu_link'>
                    {/* {menu?.path} */}
                </span>
            </div>
        </div >
    )
}

export default Header