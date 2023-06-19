
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaQq, FaHospital } from "react-icons/fa"
import { IoIosSchool } from "react-icons/io"
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const ListDatas = [
    {
        id: 1,
        image: "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
        name: "Dr.Nguyen Thuy Dung",
        education: "Professor, Ph.D.,Doctor",
        address: "Anesthesiology and Pain Management",
        title: "Professor, Ph.D., Dr. Philippe Macaire has dedicated over 30 years in the field of Anesthesiology and Pain Management. Dr. Philippe Macaire has been awarded the title of Professor. He has devoted his career to..."
    },
    {
        id: 2,
        image: "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
        name: "Dr.Nguyen Thuy nghia",
        education: "Professor, Ph.D.,Doctor",
        address: "Anesthesiology and Pain Management",
        title: "Professor, Ph.D., Dr. Philippe Macaire has dedicated over 30 years in the field of Anesthesiology and Pain Management. Dr. Philippe Macaire has been awarded the title of Professor. He has devoted his career to..."
    },
    {
        id: 3,
        image: "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
        name: "Dr.Nguyen Thuy phong",
        education: "Professor, Ph.D.,Doctor",
        address: "Anesthesiology and Pain Management",
        title: "Professor, Ph.D., Dr. Philippe Macaire has dedicated over 30 years in the field of Anesthesiology and Pain Management. Dr. Philippe Macaire has been awarded the title of Professor. He has devoted his career to..."
    },
    {
        id: 4,
        image: "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
        name: "Dr.Nguyen Thuy tuan",
        education: "Professor, Ph.D.,Doctor",
        address: "Anesthesiology and Pain Management",
        title: "Professor, Ph.D., Dr. Philippe Macaire has dedicated over 30 years in the field of Anesthesiology and Pain Management. Dr. Philippe Macaire has been awarded the title of Professor. He has devoted his career to..."
    },
    {
        id: 5,
        image: "https://demoda.vn/wp-content/uploads/2022/03/anh-anime-co-don-1.jpg",
        name: "Dr.Nguyen Thuy luong",
        education: "Professor, Ph.D.,Doctor",
        address: "Anesthesiology and Pain Management",
        title: "Professor, Ph.D., Dr. Philippe Macaire has dedicated over 30 years in the field of Anesthesiology and Pain Management. Dr. Philippe Macaire has been awarded the title of Professor. He has devoted his career to..."
    },
]

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};



export default function FaqList() {
    const slider = useRef();
    function next() {
        slider.current.slickNext();
    }
    function previous() {
        slider.current.slickPrev();
    }
    return (
        <div>
            <h2>Previous and Next methods</h2>
            <Slider ref={slider} {...settings}>
                <div key={1}>
                    {ListDatas.slice(0, 3).map((data) => (
                        <div key={data.id} className=" w-[100%] h-[150px] mb-[20px] rounded-[15px]">
                            <div className="flex p-4 relative bg-white rounded-[15px] shadow-xl" key={data.id}>
                                <div className="w-[15%] h-[120px] rounded-[15px] overflow-hidden mr-[30px] mt-2 ">
                                    <img className="w-[100%]" src={data.image} alt="" />
                                </div>
                                <div className="w-[85%] pr-[20%]">
                                    <h1 className="font-semibold">
                                        {data.name}
                                    </h1>
                                    <div className="flex">
                                        <div className="pr-[5px] text-5xl"><IoIosSchool /></div>
                                        <a className="text-2xl font-light ">{data.education}</a>
                                    </div>
                                    <div className="flex pt-1">
                                        <div className="pr-[10px] text-4xl"><FaHospital /></div>
                                        <a className="text-2xl font-light">{data.address}</a>
                                    </div>
                                    <div>
                                        <span className="text-lg font-light">
                                            {data.title}
                                        </span>
                                        <span className=" text-lg text-gradientLeft cursor-pointer">
                                            Read more
                                        </span>
                                    </div>
                                    <div className="absolute top-8 right-8">
                                        <button className=" bg-blue-700 w-[200px] h-[40px] rounded-[10px] text-white" style={{ backgroundColor: '#3A8EF6' }}>Book Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div key={2}>
                    {ListDatas.slice(3).map((data) => (
                        <div key={data.id} className=" bg-white w-[100%] h-[150px] rounded-[15px] shadow-2xl mb-[15px]">
                            <div className="flex p-4 relative" key={data.id}>
                                <div className="w-[15%] h-[120px] rounded-[15px] overflow-hidden mr-[30px] mt-2 ">
                                    <img className="w-[100%]" src={data.image} alt="" />
                                </div>
                                <div className="w-[85%] pr-[20%]">
                                    <h1 className="font-semibold">
                                        {data.name}
                                    </h1>
                                    <div className="flex">
                                        <div className="pr-[5px] text-5xl"><IoIosSchool /></div>
                                        <a className="text-2xl font-light ">{data.education}</a>
                                    </div>
                                    <div className="flex pt-1">
                                        <div className="pr-[10px] text-4xl"><FaHospital /></div>
                                        <a className="text-2xl font-light">{data.address}</a>
                                    </div>
                                    <div>
                                        <span className="text-lg font-light">
                                            {data.title}
                                        </span>
                                        <span className=" text-lg text-gradientLeft cursor-pointer">
                                            Read more
                                        </span>
                                    </div>
                                    <div className="absolute top-8 right-8">
                                        <button className=" bg-blue-700 w-[200px] h-[40px] rounded-[10px] text-white" style={{ backgroundColor: '#3A8EF6' }}>Book Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Slider>
            <div className="pt-[20px]" style={{ textAlign: "center" }}>
                <button className="button text-[30px] w-10 h-10 bg-gradientLeft mr-[30px]" onClick={previous}>
                    <MdKeyboardArrowLeft className="ml-[2px]" />
                </button>
                <button className="button text-[30px] w-10 h-10 bg-gradientLeft" onClick={next}>
                    <MdKeyboardArrowRight className="ml-[3px]" />
                </button>
            </div>
        </div>
    );
}
