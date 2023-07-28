import Footer from "../../module/home/Footer";
import NewsPageContent from "../../module/guest/NewsPageContent/NewsPageContent";
import HomeHeaderService from "../../module/home/HomeHeaderService";
import React from "react";

function NewsPage() {
  return (
    <div>
      <div className="bg-white">
        <HomeHeaderService></HomeHeaderService>
      </div>
      <div className="w-[100%] h-[130px] bg-white flex items-center">
        <h1 className="ml-[11%] text-[20px] font-bold">News</h1>
      </div>
      <div className="bg-white">
        <NewsPageContent />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default NewsPage;
