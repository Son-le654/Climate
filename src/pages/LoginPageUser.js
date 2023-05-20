import React, { useEffect, useState } from "react";
import LayoutSign from "../layout/LayoutSign";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputUsername from "../components/input/InputUsername";
import InputPassword from "../components/input/InputPassword";
import { urlLogin } from "../url/urlTest";
import { contextType } from "react-datetime";

const LoginPageUser = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  const [data, setData] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // useEffect(() => { 
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://fakestoreapi.com/users'
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);
  // console.log(data);

  const handleChangeUsername = (event) => {
    const userinput = event.target.value;
    // console.log(userinput);
    setUsername(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    // console.log(password);
  }

  //doc1@gmail.com - 123
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = (await axios.post(`http://localhost:8080/api/login`, {
      "email": username,
      "password": password
    }));
    console.log(response);
    if (response.data.token.length > 0) {
      const tokenn = response.data.token;
      console.log("true");
      localStorage.setItem("token", response.data.token)
      navigate("/book_appointment",
        { state: {tokenn} })
    }
  }

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
              <Link to="" className="text-gradientLeft">
                Forgot Password?
              </Link>
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
        <div className="mt-[32px] flex items-center justify-center gap-1 ">
          <Link to="/login" className="text-textColor">
            For doctor!
          </Link>
        </div>
        <div className="mt-[32px] flex items-center justify-center gap-1 ">
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
