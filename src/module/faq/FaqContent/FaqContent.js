import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import FaqContentAccount from './FaqComponentContent/FaqContentAccount';
import FaqContentAppointment from './FaqComponentContent/FaqContentAppointment';
import FaqContentCreating from './FaqComponentContent/FaqContentCreating';
import FaqContentReading from './FaqComponentContent/FaqContentReading';
import FaqContentViewing from './FaqComponentContent/FaqContentViewing';


function FaqContent() {
    //staff
    const [isIcon, setIsicon] = useState(false);
    const [isExpanded, setExpanded] = useState(true);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        setIsicon(!isIcon);
        setExpanded(!isExpanded);
    }
    return (
        <div>
            <div className="w-[100%] rounded-3xl">
                <div className="w-[100%] flex  h-[70px]">
                    <div className="w-[70%] rounded-3xl h-[35px]">
                        {isExpanded ? (
                            <div className="h-[100px] w-[100%] cursor-pointer ">
                                <div className="w-[100%] flex">
                                    <div className="w-[50%]">
                                        <h1 className="text-[25px] text-gradientLeft" >
                                            About ClinicMate
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-[100px] w-[100%] cursor-pointer ">
                                <div className="w-[100%] flex">
                                    <div className="w-[50%]">
                                        <h1 className="text-[25px]   text-gradientLeft" >
                                            About ClinicMate
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className="w-[30%] flex justify-end text-[60px] text-gradientLeft cursor-pointer"
                        {...getToggleProps({ onClick: handleOnClick })}
                    >
                        {isIcon ? <AiOutlinePlus /> : <AiOutlineMinus />}
                    </div>
                </div>
                <div className='w-[100%] h-[30px] flex items-start'>
                    <hr className="w-[100%] text-gradientLeft" />
                </div>
                <div {...getCollapseProps()}>
                    <div className=" min-h-[800px] w-[100%]">
                        <div className="w-[100%] min-h-[700px] ">
                            <div className="w-[100%] h-[180px] ">
                                <div className="w-[100%] h-[40px] ">
                                    <h1 className="font-semibold text-[21px]">1. What is Clinicmate?</h1>
                                </div>
                                <div className="w-[100%] min-h-[100px]  flex justify-center">
                                    <p className="text-[21px] font-light w-[95%] ml-[15px]">
                                        Clinicmate is an application developed by the Clinicmate Healthcare System that helps individuals and families manage their health with a focus on proactive care, prevention, and personalization. It enables customers to actively participate in their treatment journey as well as their own and their loved ones' health care journey.
                                    </p>
                                </div>
                            </div>
                            <div className="w-[100%] min-h-[210px] ">
                                <div className="w-[100%] h-[40px] ">
                                    <h1 className="font-semibold text-[21px]">2. Who should use Clinicmate?</h1>
                                </div>
                                <div className="w-[100%] min-h-[100px]  flex justify-center">
                                    <p className="text-[21px] font-light w-[95%] ml-[15px]">
                                        If you are someone who is concerned about your health, the Clinicmate app can assist you in your health care journey. The utilities and content of Clinicmate are developed to support various needs of different user groups, from those with special care needs such as pregnant women or families with young children, to ordinary users with health care needs such as adolescents. At Clinicmate, all user groups can find the necessary health care information for themselves.

                                    </p>
                                </div>
                            </div>
                            <div className="w-[100%] h-[180px]">
                                <div className="w-[100%] h-[40px] ">
                                    <h1 className="font-semibold text-[21px]">3. What does Clinicmate version 1.0 include?</h1>
                                </div>
                                <div className="w-[100%] min-h-[100px]  flex justify-center">
                                    <p className="text-[21px] font-light w-[95%] ml-[15px]">
                                        In version 1.0, Clinicmate has 9 basic features: registration and login, news reading, calling Clinicmate hospitals, appointment booking and reminders, viewing examination results and medical history at Vinmec, Clinicmate customer health code, and viewing general health examination results. In subsequent versions, Clinicmate will have many other notable features.
                                    </p>
                                </div>
                            </div>
                            <div className="w-[100%]h-[180px] ">
                                <div className="w-[100%] h-[40px] ">
                                    <h1 className="font-semibold text-[21px]">4. What devices can Clinicmate be used on?</h1>
                                </div>
                                <div className="w-[100%] min-h-[100px]  flex justify-center">
                                    <p className="text-[21px] font-light w-[95%] ml-[15px]">
                                        Clinicmate is used on the Clinicmate.io.vn website, where users can log in to their Clinicmate accounts to access various features.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100%] rounded-3xl">
                <FaqContentAccount />
            </div>
            <div className="w-[100%] rounded-3xl">
                <FaqContentReading />
            </div>
            <div className="w-[100%] rounded-3xl">
                <FaqContentAppointment />
            </div>
            <div className="w-[100%] rounded-3xl">
                <FaqContentCreating />
            </div>
            <div className="w-[100%] rounded-3xl">
                <FaqContentViewing />
            </div>
            <div className='w-[100%] min-h-[200px] '>
                <p className="text-[18px] w-[95%]">
                    In case you cannot find the information you need, please contact us via the email address hello@clinicmate.io.vn or any hotline number of the Clinicmate private clinic system. We are always ready to serve and listen to your feedback and suggestions.
                </p>
            </div>
        </div>
    );
};

export default FaqContent