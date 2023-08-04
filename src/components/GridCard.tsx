import React from 'react';
import '../styles/GridCardStyles.scss';
import { cardcontent2, OrderContent } from '../data';
import { BarChartCard, PieChartCard } from '../components';

const GridCard = () => {
    return (
        <div className='gridcard__section'>
            <div className="gridcard__top">
                <div className="gridcard__top-left">
                    <PieChartCard />
                </div>
                <div className="gridcard__top-right">
                    {cardcontent2.map((card, key) => (
                        <div
                            key={key}
                            className="gridcard__top-right-1"
                            style={{ backgroundColor: card.bgColor }}
                        >
                            <div className="gridcard__icon-head">
                                <span className='gridcard__icon'
                                    style={{ backgroundColor: card.iconBgColor, color: card.iconColor }}
                                >{<card.icon1 />}</span>
                                <span className='gridcard__day'>{card.day}</span>
                            </div>
                            <div className="gridcard__head">
                                <h3 className='gridcard__title'
                                    style={{ color: card.titleColor }}
                                >{card.title}</h3>
                                <h3 className='gridcard__status'
                                    style={{ color: card.statusColor }}
                                >{card.status}</h3>
                            </div>
                            <div className="gridcard__top__bottom-main">
                                <div className="gridcard__top__bottom-head">
                                    <span className='gridcard__total'
                                        style={{ color: card.totalColor }}
                                    >{card.total}</span>
                                    <span
                                        style={{ color: card.totalPercentColor }}
                                    >{card.totalPercent}</span>
                                </div>
                                <div className="gridcard__bottom-down">
                                    <span
                                        style={{ color: card.statusColor }}
                                    >{card.statusCount}</span>
                                    <span
                                        style={{ color: card.statusPercentColor }}
                                    >{card.statusPercent}</span>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className="gridcard__bottom">
                <BarChartCard />
            </div>

        </div>
    )
}

export default GridCard