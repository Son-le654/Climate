import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';




const Listdata = [
    {
        id: 1,
        name: 'Pediatrics',
        number: 56
    },
    {
        id: 2,
        name: 'Diagnostic Imaging',
        number: 56
    },
    {
        id: 3,
        name: 'Intensive Care - Emergency',
        number: 56
    },
    {
        id: 4,
        name: 'Obstetrics and Gynecology',
        number: 56
    },
    {
        id: 5,
        name: 'Neonatology',
        number: 56
    },
    {
        id: 6,
        name: 'Pharmacy',
        number: 56
    },

    {
        id: 7,
        name: 'Cardiology',
        number: 56
    },
    {
        id: 8,
        name: 'Cardiology',
        number: 56
    },
    {
        id: 9,
        name: 'Cardiology',
        number: 56
    },
]



function FaqSpecialty() {
    const [isIcon, setIsicon] = useState(false)
    const [isExpanded, setExpanded] = useState(false)
    // const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    function handleOnClick() {
        setIsicon(!isIcon);
        setExpanded(!isExpanded);
    }
    return (
        <div className='w-[100%] h-[100%] rounded-3xl bg-white shadow-lg'>
            <div className="w-[100%] rounded-3xl h-[35px]">
                <h1 className="p-3 ml-1 font-bold text-3xl">Specialty</h1>
            </div>
            <hr className="w-[90%] ml-5 text-[#d4d4d4]" />
            <div>
                {
                    isExpanded ? (
                        Listdata.slice(0, 7).map((data) => (
                            <div className="flex justify-around w-[100%] h-[28px] ml-2" key={data.id}>
                                <div className="w-[75%]">
                                    <h5 className="p-[7px] text-lg font-normal">{data.name}</h5>
                                </div>
                                <div className="w-[25%]">
                                    <div className="p-[7px] flex pt-3">
                                        <span className="text-xl pr-2">{data.number}</span>
                                        <span className="text-2xl pt-1">
                                            <BsFillPeopleFill />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        Listdata.slice(0, 7).map((data) => (
                            <div className="flex justify-around w-[100%] h-[28px] ml-2" key={data.id}>
                                <div className="w-[75%]">
                                    <h5 className="p-[7px] text-lg font-normal">{data.name}</h5>
                                </div>
                                <div className="w-[25%]">
                                    <div className="p-[7px] flex pt-3">
                                        <span className="text-xl pr-2">{data.number}</span>
                                        <span className="text-2xl pt-1">
                                            <BsFillPeopleFill />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
            <div {...getCollapseProps()}>
                {Listdata.slice(7).map((data) => (
                    <div className="flex justify-around w-[100%] h-[28px] ml-2" key={data.id}>
                        <div className="w-[75%]">
                            <h5 className="p-[7px] text-lg font-normal">{data.name}</h5>
                        </div>
                        <div className="w-[25%]">
                            <div className="p-[7px] flex pt-3">
                                <span className="text-xl pr-2">{data.number}</span>
                                <span className="text-2xl pt-1">
                                    <BsFillPeopleFill />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-[40px] text-gradientLeft cursor-pointer flex justify-center' {...getToggleProps({ onClick: handleOnClick })}>
                {isIcon ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
        </div >
    )
}
export default FaqSpecialty

