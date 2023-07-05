import HomeHeaderService from "../../module/home/HomeHeaderService";
import Footer from "../../module/home/Footer";
import ChooseNewPasswordContent from "../../module/forgotpassword/choosenewpassword/ChooseNewPasswordContent";
import { useLocation, useNavigate } from "react-router";

function ChooseNewPassword() {

  return (
    <div>
      <div className="bg-white">
        <HomeHeaderService></HomeHeaderService>
      </div>
      <div>
        <ChooseNewPasswordContent />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
export default ChooseNewPassword;
