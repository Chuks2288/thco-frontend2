import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';

const DashLayout = () => {
    return (
        <Layout>
            <main className='app'>
                <Outlet />
            </main>
        </Layout>
    )
}

export default DashLayout