import HomeHeaderService from "../module/home/HomeHeaderService"
import DoctorInformationContent from "../module/doctorinformation/DoctorInformationContent"
import Footer from "../module/home/Footer"



function DoctorInformation() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <HomeHeaderService></HomeHeaderService>
            </div>
            <div className="bg-white">
                <DoctorInformationContent />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default DoctorInformation