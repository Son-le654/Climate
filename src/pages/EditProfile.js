import HomeHeaderService from "../module/home/HomeHeaderService"
import Footer from "../module/home/Footer"
import EditProfileContent from "../module/profile/EditProfileContent"

function EditProfile() {
    return (
        <div className="w-[100%] min-h-[1000px] bg-white flex justify-center">
            <div className="w-[80%] min-h-[1000px] bg-white">
                <div className="bg-white">
                    <HomeHeaderService />
                </div>
                <div className="w-[100%] h-[200px] flex items-center">
                    <h1 className="text-[40px] font-bold"> Edit Profile</h1>
                </div>
                <div className="bg-white">
                    <EditProfileContent />
                </div>
                <div className="bg-white">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default EditProfile