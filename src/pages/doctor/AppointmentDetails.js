import Footer from "../../module/home/Footer";
import HomeHeaderService from "../../module/home/HomeHeaderService";
import AppointmentDetailsContent from "../../module/doctor/AppointmentDetailsContent/AppointmentDetailsContent";
function AppointmentDetails() {

    return (
        <div>
            <div className="bg-white">
                <HomeHeaderService></HomeHeaderService>
            </div>

            <div style={{ padding: "3% 12%" }} className="bg-white">
                <AppointmentDetailsContent />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default AppointmentDetails