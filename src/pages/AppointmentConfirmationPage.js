
import HomeHeaderService from "../module/home/HomeHeaderService";
import AppointmentConfirmationContent from "../module/appointmentConfirmation/AppointmentConfirmationContent";
import Footer from "../module/home/Footer";




const AppointmentConfirmationPage = () => {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <HomeHeaderService></HomeHeaderService>
            </div>
            <div className="pt-[80px] pl-[190px] text-6xl font-bold py-[20px]">
                <h1>
                    Appointment Confirmation
                </h1>
            </div>
            <div style={{ padding: "3% 12%" }}>
                <AppointmentConfirmationContent></AppointmentConfirmationContent>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default AppointmentConfirmationPage