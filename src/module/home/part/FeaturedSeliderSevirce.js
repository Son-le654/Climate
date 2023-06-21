import React, { useState } from 'react';
import Slider from 'react-slick';
import { TbSpeakerphone } from "react-icons/tb";

const AsNavFor = props => {
  const [nav1, setNav1] = useState();
  const ListHotNews = [
    {
      id: 1,
      news: "Khai trương phòng khám Đa Khoa ClinicMate tại Đà Nẵng"
    },
    {
      id: 2,
      news: "Khai trương phòng khám Đa Khoa ClinicMate tại Đà Nẵng"
    },
    {
      id: 3,
      news: "Khai trương phòng khám Đa Khoa ClinicMate tại Đà Nẵng"
    },
    {
      id: 4,
      news: "Khai trương phòng khám Đa Khoa ClinicMate tại Đà Nẵng"
    },
    {
      id: 5,
      news: "Khai trương phòng khám Đa Khoa ClinicMate tại Đà Nẵng"
    },
    {
      id: 6,
      news: "Khai trương phòng khám Đa Khoa ClinicMate tại Đà Nẵng"
    },
  ]

  return (
    <div className='pb-[150px]'>
      <Slider
        asNavFor={nav1}
        ref={c => setNav1(c)}
        slidesToShow={2}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
      >
        {ListHotNews.map((ListHotNew) => (
          <div key={ListHotNew} className='pl-[30px] mt-[20px] relative'>
            <div className='flex p-[12px] rounded-2xl absolute' style={{ backgroundColor: '#457bf6', zIndex: '1', top: '-20px', left: '60px' }}>
              <span style={{ color: 'white', fontSize: '35px', paddingRight: '10px' }}><TbSpeakerphone /></span>
              <h2 style={{ fontWeight: '500', color: 'white' }}>
                NEW SERVICES
              </h2>
            </div>
            <div className=' bg-sky-100 pb-[70px] rounded-[30px] pl-[10px] pr-[80px] bg-[aliceblue]'>
              <h3 key={ListHotNew.id} className='pl-[50px] pt-[60px]' style={{ color: '#4e6cf7', fontWeight: '600' }}>{ListHotNew.news}</h3>
            </div>
          </div>
        ))}
      </Slider >
    </div >
  );
};

export default AsNavFor;