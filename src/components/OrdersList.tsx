import React from 'react';
import { OrderContent } from '../data';
import { TbCurrencyNaira } from 'react-icons/tb';
import { phone1, phone2 } from '../images';
import "../styles/OrderListStyles.scss"

const OrdersList = () => {




    return (
        <div>
            <h3 className='font-bold pb-[1.2rem]'>Recent Orders</h3>

            <div className="order__section">
                {OrderContent.map((order, key) => (
                    <div className="order__content-main">
                        <div className="order__img">
                            <img src={order.img} alt="img" />
                        </div>
                        <div className="order__content">
                            <div className="order__content-model">
                                <h3>{order.model}</h3>
                                <div>
                                    <span>
                                        <TbCurrencyNaira />
                                    </span>
                                    <div>
                                        <h3> {order.price}</h3>
                                        <span className='ml-[.3rem] font-bold'> x {order.orderNumber}</span>

                                    </div>

                                </div>

                            </div>
                            <div className="order__content-price">
                                <span>{order.date}</span>
                                <span
                                    style={{ backgroundColor: order.bgColor, color: order.textColor }}
                                >{order.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrdersList