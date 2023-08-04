import React from 'react';
import { cardcontent1 } from '../data';
import '../styles/CardStyles.scss';



const Card = () => {
    return (
        <div className='card'>
            {cardcontent1.map((card, index) => {
                return (
                    <div
                        key={card.title}
                        className={`card__content p-[.9rem] pb-3
                        ${index != cardcontent1.length - 1 ? 'w-[365px] h-[160px]' : 'w-[415px] h-[160px]'}`}
                    >
                        <div className="card__content-top">
                            <span className='card__icon-1'
                                style={{ backgroundColor: card.bgColor }}
                            >{<card.icon1 />}</span>
                            <div className="card__content__top-right">
                                <p className='card__day'>{card.day}</p>
                                <span className='card__icon-2'>
                                    {<card.icon2 />}
                                </span>
                            </div>
                        </div>
                        <div className="card__content-bottom">
                            <div className="card__content__bottom-head">
                                <h3>{card.title}</h3>
                                <h3>{card.status2}</h3>
                                <h3>{card.status}</h3>
                            </div>
                            <div className="card__content__bottom-down">
                                <div className="card__content__total">
                                    <span className='card__total'>{card.total}</span>
                                    <span className='card__total-percent'
                                        style={{ color: card.textColor }}
                                    >{card.totalPercent}</span>
                                </div>
                                <span className='card__status-pending'>{card.pending}</span>
                                <div className="card__content__status">
                                    <span className='card__status-count'>{card.statusCount}</span>
                                    <span className='card__status-percent'
                                        style={{ color: card.textColor }}
                                    >{card.statusPercent}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card