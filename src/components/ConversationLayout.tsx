import React, { useState } from 'react';
import { childrenProps } from '../interface/general';
import '../styles/ConvLayoutStyles.scss';
import { LuSearch } from 'react-icons/lu';
import { chatNameList } from '../data';
import { Link, useLocation } from 'react-router-dom';



const ConversationLayout = ({ children }: childrenProps) => {

    const location = useLocation();
    const [search, setSearch] = useState("");

    return (
        <div>
            <div className=" coversation__header">
                <h2 className='font-bold'>Conversation With Customers</h2>
                <span className=''>New message</span>
            </div>
            <div className="Conversation__layout">
                <div className="chatSidebar">
                    <div className="px-[1rem]">
                        <div className="flex justify-between">
                            <h3 className='font-bold'>Contacts</h3>
                            <span>34</span>
                        </div>
                        <div className="search">
                            <LuSearch />
                            <input
                                type="search"
                                placeholder='Search'
                                className='search__bar'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="chat__list">
                        {chatNameList.filter((chat: any) => {
                            if (search == "") {
                                return chat
                            } else if (chat.name.toLowerCase().includes(search.toLowerCase())) {
                                return chat
                            }
                        }).map((chat: any,) => {

                            const isActive = location.pathname === chat.path
                            return (

                                <Link to={chat.path}
                                    className={`chat__list__content ${isActive && "current"}`}
                                    key={chat.name}
                                >

                                    <div className="chat__img_status">
                                        <img src={chat.img} alt="img" className='chat-img' />
                                        <span className='status' style={{ backgroundColor: chat.statusColor }} />
                                    </div>
                                    <div className="chat__info">
                                        <h4>{chat.name}</h4>
                                        <div className="">
                                            <p>{chat.message}</p>
                                            <span>{chat.time}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="chatBody">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ConversationLayout