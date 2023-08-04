import React from 'react';
import { Card, GridCard, OrdersList } from '../components';
import '../styles/DashboardStyles.scss';

const Dashboard = () => {
    return (
        <div>
            <div className="card__top">
                <Card />
            </div>
            <div className="card__bottom">
                <div className="card__bottom__gridcard">
                    <GridCard />
                </div>
                <div className="card__bottom__orderslist">
                    <OrdersList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard