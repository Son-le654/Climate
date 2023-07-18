import HomeHeaderService from "../module/home/HomeHeaderService"
import Footer from "../module/home/Footer"
import ProfileContent from "../module/profile/ProfileContent"

function ProfilePage() {
    return (
        <div className="w-[100%] min-h-[1000px] bg-white flex justify-center">
            <div className="w-[80%] min-h-[1000px] bg-white">
                <div className="bg-white">
                    <HomeHeaderService />
                </div>
                <div className="w-[100%] h-[200px] flex items-center">
                    <h1 className="text-[40px] font-bold"> My Profile</h1>
                </div>
                <div className="bg-white">
                    <ProfileContent />
                </div>
                <div className="bg-white">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default ProfilePage