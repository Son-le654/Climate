import HomeHeaderService from "../module/home/HomeHeaderService";
import Footer from "../module/home/Footer";
import EditProfileContent from "../module/profile/EditProfileContent";
import React from "react";
import FaqContent from "module/faq/FaqContent/FaqContent";


function FaqPage() {
    return (
        <div className="w-[100%] min-h-[1000px] bg-white">
            <div className="w-[100%] flex justify-center">
                <div className="w-[80%] min-h-[1000px] bg-white">
                    <div className="bg-white">
                        <HomeHeaderService></HomeHeaderService>
                    </div>
                    <div className="w-[100%] h-[200px] flex items-center">
                        <h1 className="text-[40px] font-bold">Frequently Asked Questions</h1>
                    </div>
                    <div className="bg-white">
                        <FaqContent />
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <Footer />
            </div>
        </div>
    );
}
export default FaqPage;
