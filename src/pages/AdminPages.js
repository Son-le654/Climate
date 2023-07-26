import HomeHeaderService from "../module/home/HomeHeaderService"
import Footer from "../module/home/Footer"
import AdminContent from "../module/admin/AdminContent"

function AdminPages() {
    return (
        <div className="w-[100%] min-h-[1000px] bg-white">
            <div className="w-[100%] min-h-[1000px] bg-white flex justify-center">
                <div className="w-[80%] min-h-[1000px]">
                    <div className="bg-white">
                        <HomeHeaderService />
                    </div>
                    <div className="w-[100%] h-[200px] flex items-center">
                        <h1 className="text-[40px] font-bold">Dashboard</h1>
                    </div>
                    <div className="bg-white w-[100%] h-[1000px]">
                        <AdminContent />
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <Footer />
            </div>
        </div>
    )
}
export default AdminPages


