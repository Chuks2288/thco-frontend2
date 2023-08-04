import React from 'react';
import ConversationLayout from './ConversationLayout';
import { Outlet } from 'react-router-dom';
import { childrenProps } from '../interface/general';

const chatLayout = () => {
    return (

        <ConversationLayout>
            <div>
                <Outlet />
            </div>
        </ConversationLayout>

    )
}

export default chatLayout