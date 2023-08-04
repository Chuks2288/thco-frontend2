import React from 'react';
import { ConversationLayout } from '../components';
import ChatLayout from '../components/ChatLayout';
import { Outlet } from 'react-router-dom';

const Conversations = () => {
    return (

        <ConversationLayout>
            <Outlet />
        </ConversationLayout>

    )
}

export default Conversations