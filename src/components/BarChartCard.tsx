import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


const data = [
    { name: 'Sept 10', uv: 4000, pv: 90000, amt: 2400 },
    { name: 'Sept 11', uv: 3000, pv: 40000, amt: 2210 },
    { name: 'Sept 12', uv: 2000, pv: 60000, amt: 2290 },
    { name: 'Sept 13', uv: 2780, pv: 20000, amt: 2000 },
    { name: 'Sept 14', uv: 1890, pv: 80000, amt: 2181 },
    { name: 'Sept 15', uv: 2390, pv: 50000, amt: 2500 },
    { name: 'Sept 16', uv: 3490, pv: 80000, amt: 2100 },
];

const BarChartCard = () => {

    return (
        <>

            <div className="flex justify-between mx-[2rem] mt-[1rem] mb-[-2.5rem]">
                <div className="flex w-[9rem] justify-between items-center">
                    <h3 className='text-[14px]'>Summary</h3>
                    <span className='text-[12px] text-blue-600'>Sales</span>
                    <span className='text-blue-600'><MdOutlineKeyboardArrowDown /></span>
                </div>
                <div className="flex w-[5.5rem] justify-between items-center">
                    <p className='text-[12px] font-bold'>Last 7 Days</p>
                    <span><MdOutlineKeyboardArrowDown /></span>

                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 80,
                        right: 30,
                        left: 40,
                        bottom: 20,
                    }}
                >
                    <XAxis
                        dataKey="name"
                        scale="point"
                        // padding={{ left: 10, right: 10, }}
                        style={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        dy={20}
                    />

                    <YAxis
                        style={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        type="number"
                        domain={[0, 100000]}
                        tickCount={7}
                        dx={-30}
                        tickFormatter={(value) =>
                            new Intl.NumberFormat("en-US", {
                                notation: "compact",
                                compactDisplay: "short",
                            }).format(value)
                        }
                    />

                    <Bar dataKey="pv" fill="blue"
                        background={{ fill: '#eee', radius: 20, width: 15 }}
                        radius={20} barSize={15} />
                </BarChart>
            </ResponsiveContainer>

        </>
    );
}

export default BarChartCard