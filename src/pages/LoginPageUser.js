import React, { useEffect, useState } from "react";
import LayoutSign from "../layout/LayoutSign";
import Button from "../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputUsername from "../components/input/InputUsername";
import InputPassword from "../components/input/InputPassword";
import { publicPort } from "../components/url/link";
<<<<<<< HEAD
import AiFillGoogleCircle from "../Images/mdigoogle.png";
import AiFillFaceCircle from "../Images/bxl_facebook.png";
import AiFillTwitterCircle from "../Images/uil_twitter.png";

=======
import { AiFillGoogleCircle } from "react-icons/ai";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
>>>>>>> ff26e17c396e78a965107dff12970ce1b3ce0a4c

const LoginPageUser = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("token");
    if (storedName !== null) {
      navigate("/service");
    }
  }, []);

  const handleChangeUsername = (event) => {
    const userinput = event.target.value;
    // console.log(userinput);
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    // console.log(password);
  };
  //doc1@gmail.com - 123
  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(username);

    if (!isValidEmail) {
      // do something
      alert("Incorrect Email format");
      return;
    }
    const response = await axios.post(publicPort + `patient/login`, {
      email: username,
      password: password,
    });
    // console.log(response);

    if (response.data.token === undefined) {
      alert("Incorrect email or password.");
    }

    if (response.data.token.length > 0) {
      const tokenn = response.data.token;
      // console.log("true");
      localStorage.setItem("token", response.data.token);
      navigate("/service", { state: { tokenn } });
    }
  };
  const firebaseConfig = {
    apiKey: "AIzaSyAHTSCNqDml61V3OGWWMB7gJJe5Xpg6MaU",
    authDomain: "climates-48696.firebaseapp.com",
    projectId: "climates-48696",
    storageBucket: "climates-48696.appspot.com",
    messagingSenderId: "13463981194",
    appId: "1:13463981194:web:0185cfdc1d64c283d6b173",
    measurementId: "G-8NG47L0MBF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
  
       const usersCollection = collection(db, 'users');
      // Tạo yêu cầu POST với thông tin người dùng đã đăng nhập
      const postData = {
        email: user.email,
        displayName: user.displayName,
        // Các thông tin khác cần truyền
      };
      
  
      // Sử dụng thư viện hoặc phương thức để thực hiện yêu cầu POST
      const response = await axios.post(publicPort + `patient/logingoogle`, {
        email: user.email,
        displayName: user.displayName,
      });
      // console.log(response);
  
      if (response.data.token === undefined) {
        alert("Incorrect email or password.");
      }
  
      if (response.data.token.length > 0) {
        const tokenn = response.data.token;
        // console.log("true");
        localStorage.setItem("token", response.data.token);
        navigate("/service", { state: { tokenn } });
      }
  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LayoutSign
      header="Login"
      childrenStyle="!max-w-[500px] rounded-3xl overflow-hidden"
    >
      <div className="bg-white p-[40px_42px]">
        <div className="flex flex-col items-center justify-center">
          <Logo></Logo>
          <span className="text-[9px] text-gray2">Clinic Management</span>
        </div>
        <div className="flex w-[100%] justify-center mt-[10px]">
          <div className=" flex items-center justify-center gap-1 w-[45%] h-[70px] rounded-2xl mr-[10%] border-[#d8d7da] border-[1px]">
            <Link
              to="/login-user"
              className="  text-textColor flex items-center"
            >
              <input className="w-[20px] h-[20px]" type="radio" checked />
              <p className="text-[20px] ml-[10px]">For user!</p>
            </Link>
          </div>
          <div className=" flex items-center justify-center gap-1 w-[45%] h-[70px] rounded-2xl border-[#d8d7da] border-[1px]">
            <Link to="/login" className="  text-[#a2a7af] flex items-center">
              <input className="w-[20px] h-[20px]" type="radio" />
              <p className="text-[20px] ml-[10px]">For staff!</p>
            </Link>
          </div>
        </div>
        <form autoComplete="off" className="mt-9" onSubmit={handleSubmit}>
          <InputUsername
            handleChangeUsername={handleChangeUsername}
            type="text"
            placeholder="Username or Email"
            control={control}
            name="email"
            username={username}
          ></InputUsername>
          <InputPassword
            handleChangePassword={handleChangePassword}
            password={password}
            name="password"
            type="password"
            className="mt-8"
            placeholder="Password"
            control={control}
          ></InputPassword>
          <div className="flex justify-between mt-[10px]">
            <div className="flex items-center gap-1 text-textColor">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] border border-textColor"
              />
              <label htmlFor="">Remember me</label>
            </div>
            <div>
              <Link to="/registerenteremail" className="text-gradientLeft">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[40%]">
              <hr className="text-[#c5bfbf]" />
            </div>
            <div className="w-[20%] flex justify-center text-[#c5bfbf]">
              <p>Or</p>
            </div>
            <div className="w-[40%] text-[#c5bfbf]">
              <hr />
            </div>
          </div>
          <div className="flex justify-center w-[100%] ">
            <div className="w-[50%] flex justify-center ">
              <div className="w-[33%] flex justify-start">
                <div
                  onClick={handleLoginGoogle}
                  className="w-[80%] h-[50px] bg-[#fdefef] flex justify-center items-center rounded-full cursor-pointer"
                >
                  <img src={AiFillGoogleCircle} className="w-[50%] h-[50%]" />
                </div>
              </div>
              <div className="w-[33%] flex justify-center">
                <div
                  className="w-[80%] h-[50px] bg-[#e8f2fe] flex justify-center items-center rounded-full cursor-pointer"
                >
                  <img src={AiFillFaceCircle} className="w-[50%] h-[50%]" />
                </div>
              </div>
              <div className="w-[33%] flex justify-end">
                <div
                  className="w-[80%] h-[50px] bg-[#e8f2fe] flex justify-center items-center rounded-full cursor-pointer"
                >
                  <img src={AiFillTwitterCircle} className="w-[50%] h-[50%]" />
                </div>
              </div>
            </div>
          </div>
          <Button
            // onClick={() => {
            //   navigate("/");
            // }}

            className="mt-8"
            type="submit"
          >
            Login
          </Button>
        </form>
<<<<<<< HEAD
=======
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          OR
        </div>
        <AiFillGoogleCircle
          style={{
            // padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "5rem",
            width: "100%",
            color: "red",
          }}
          onClick={handleGoogleLogin}
        ></AiFillGoogleCircle>
>>>>>>> ff26e17c396e78a965107dff12970ce1b3ce0a4c

        <div
          className="mt-[32px] flex items-center justify-center gap-1 "
          style={{ marginTop: "1rem", marginBottom: "-2rem" }}
        >
          <span className="text-gray2">New User?</span>
          <Link to="/register" className="text-textColor">
            Sign up here!
          </Link>
        </div>
      </div>
    </LayoutSign>
  );
};

export default LoginPageUser;
