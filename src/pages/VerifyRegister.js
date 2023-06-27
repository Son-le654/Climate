import HomeHeaderService from "../module/home/HomeHeaderService";
import Footer from "../module/home/Footer";
import VerifyRegisterContent from "../module/verifyRegister/VerifyRegisterContent"


function VerifyRegister() {
    return (
        <div>
            <div className="bg-white">
                <HomeHeaderService></HomeHeaderService>
            </div>
            <div>
                <VerifyRegisterContent />
            </div>
            <div>
                <  Footer />
            </div>
        </div>
    )
}
export default VerifyRegister