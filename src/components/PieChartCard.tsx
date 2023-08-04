import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import "../styles/GridCardStyles.scss"


const data = [
    { name: 'Acquisition', value: 650 },
    { name: 'Retension', value: 320 },
    { name: 'Purchase', value: 100 },
];
const COLORS = ['#5570F1', '#FFCC91', '#97A5EB'];

const PieChartCard = () => {

    const getColor = (index: number) => COLORS[index % COLORS.length];


    return (
        <div className="pie">

            <div className="flex justify-between mx-5 mt-5 mb-[-2rem]">
                <h3 className="text-[14px] font-bold">Marketing</h3>
                <div className="flex">
                    <span className='text-[12px] mr-2'>This Week</span>
                    <span><MdOutlineKeyboardArrowDown /></span>
                </div>
            </div>
            <PieChart width={800} height={400} >


                <Legend
                    layout='horizontal'
                    align='left'
                    height={350}
                    iconType='circle'
                    iconSize={10}
                    wrapperStyle={{
                        fontSize: "12px",
                        paddingLeft: "20px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "20rem",
                    }}
                    payload={
                        data.map(
                            (item, index) => ({
                                id: item.name,
                                type: "circle",
                                value: `${item.name}`,
                                color: COLORS[index % COLORS.length],

                            })
                        )
                    }
                />

                <Pie
                    data={data}
                    cx={190}
                    cy={200}
                    outerRadius={80}
                    innerRadius={60}
                    fill="#8884d8"
                    paddingAngle={-20}
                    dataKey="value"
                >
                    {data.map((entry, index) => {

                        const segmentColor = getColor(index);
                        return (

                            <Cell
                                key={`cell-${index}`}
                                fill={segmentColor}
                                style={{
                                    filter: `drop-shadow(0px 0px 10px ${segmentColor}`
                                }}
                                stroke="0"
                            />
                        )
                    })}
                </Pie>

            </PieChart>
        </div>
    );
}


export default PieChartCard