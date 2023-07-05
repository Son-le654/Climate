import HomeHeaderService from "../../module/home/HomeHeaderService";
import Footer from "../../module/home/Footer";
import VerifyRegisterContent from "../../module/forgotpassword/verifyRegister/VerifyRegisterContent";
import { useLocation, useNavigate } from "react-router";

function VerifyRegisterForgot() {

  return (
    <div>
      <div className="bg-white">
        <HomeHeaderService></HomeHeaderService>
      </div>
      <div>
        <VerifyRegisterContent />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
export default VerifyRegisterForgot;
