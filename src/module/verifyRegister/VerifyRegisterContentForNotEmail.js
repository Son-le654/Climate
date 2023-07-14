import axios from "axios";
import { useEffect, useState } from "react";
import { localPort, publicPort } from "../../components/url/link";
import { useNavigate } from "react-router";

function VerifyRegisterContentForNotEmail() {
  const [email, setEmail] = useState([
    {
      Vmail: "",
    },
  ]);
  const [otp, setOtp] = useState([
    {
      Votp: "",
    },
  ]);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    let timer;
    if (remainingTime > 0 && disabled) {
      timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
    } else {
      setDisabled(false);
      setRemainingTime(60);
    }
    return () => clearTimeout(timer);
  }, [remainingTime, disabled]);

  const handleClick = () => {
    console.log(email.Vmail);
    if (email.Vmail != undefined) {
      setDisabled(true);
      alert("Please check email to receive OTP");
      // TODO: send email
      const response = axios.get(
        publicPort + `patient/resend?email=${email.Vmail}`
      );
      console.log(response);
    } else {
      alert("Please fill Email to send OTP");
    }
  };

  const handleSkip = () => {
    navigate("/login-user");
  };

  const handleChangeName = (event) => {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    if (name === "Vmail") {
      const newEmail = {
        ...email,
        [name]: value,
      };
      console.log("set email");
      setEmail(newEmail);
    }
    if (name === "Votp") {
      const newOtp = {
        ...otp,
        [name]: value,
      };
      console.log("set otp");
      setOtp(newOtp);
    }
  };
  const verifyAcc = async () => {
    if (otp.Votp != undefined && email.Vmail != undefined) {
      const response = await axios.get(
        localPort + `patient/checkotp?otp=${otp.Votp}&email=${email.Vmail}`
      );
      console.log(response);
      if (response.data == "verify success") {
        alert("Your email is verified, welcome to clinicmate");
        navigate("/login-user");
      } else {
        alert("OTP is wrong, please check email again");
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <div className="min-h-[500px] w-[50%] mb-[100px] bg-white mt-[50px] ml-[20%] rounded-[20px]">
        <div className="pt-[5%] pl-[8%] pr-[7%]">
          <div className="w-[100%] h-[80px]">
            <h1 className="text-[30px] font-bold w-[75%]">
              Enter the confirmation code from the text message
            </h1>
          </div>
          <div className="mt-[20px] w-[100%]">
            <span className="text-grayborder2">
              Let us know if this email belongs to you. Enter the code in the
              SMS sent to
            </span>
          </div>
          <div className="mt-[20px] h-[50px] w-[70%]">
            <input
              style={{ padding: "5px" }}
              type="email"
              onChange={handleChangeName}
              name="Vmail"
              placeholder="Email"
              className="border-[1px] border-grayborder2 w-[100%] h-[50px] rounded-2xl"
            />
          </div>
          <div className="mt-[20px] h-[50px] w-[40%]">
            <input
              style={{ padding: "5px" }}
              type="text"
              onChange={handleChangeName}
              name="Votp"
              placeholder="OTP"
              className="border-[1px] border-grayborder2 w-[100%] h-[50px] rounded-2xl"
            />
          </div>
          <button
            className="button-content-only"
            style={{
              marginTop: "1rem",
              marginBottom: "-1rem",
              textDecoration: "underline",
              color: "blue",
            }}
            onClick={handleClick}
            disabled={disabled}
          >
            {remainingTime > 0
              ? `Send OTP again in ${remainingTime}s`
              : "Send OTP"}
          </button>
          <hr className="w-[100%] text-grayborder2 font-normal mt-[10%] mb-[20px]" />
          <div className=" w-[100%] h-[45px] flex justify-end">
            <span className="w-[30%] bg-[#b9b4b4] h-[50px] mr-[30px] rounded-2xl">
              <button
                className="w-[100%] h-[40px] mt-[5px] font-bold"
                onClick={handleSkip}
              >
                Skip
              </button>
            </span>
            <span className="w-[30%] bg-[#516af8] h-[50px] rounded-2xl">
              <button
                className="w-[100%] h-[40px] text-white mt-[5px] font-bold"
                onClick={verifyAcc}
              >
                Verify
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VerifyRegisterContentForNotEmail;
