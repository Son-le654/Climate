import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaSortDown, FaUserMd } from 'react-icons/fa';

const datas = [
    {
        icon: <FaMapMarkerAlt />,
        title: 'Province/City',
        iconDown: <FaSortDown />
    },
    {
        icon: <FaBuilding />,
        title: 'Specialty',
        iconDown: <FaSortDown />
    },
    {
        icon: <FaUserMd />,
        title: 'Profession',
        iconDown: <FaSortDown />
    },
]



function DoctorSearch() {
    return (
        <div className='flex'>
            {datas.map((data, index) => (
                <div key={index} className="w-[25%] h-[50px] bg-[#fff] rounded-3xl border border-[#d8d7da] p-4 flex items-center justify-center mr-[20px] text-[#828282]">
                    <div className='text-5xl'>
                        {data.icon}
                    </div>
                    <div style={{ padding: '0 20px' }}>
                        {data.title}
                    </div>
                    <div className='text-5xl mb-[7px]'>
                        {data.iconDown}
                    </div>
                </div >
            ))
            }
        </div >
    )
}
export default DoctorSearch