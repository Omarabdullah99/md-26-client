import React from "react";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import UserSubmitButton from "./UserSubmitButton";
import UserStore from "../../store/UserStore";
const LoginForm = () => {
  let navigate = useNavigate();
  let { LoginFormData, LoginFormOnChange, VerifyLoginRequest } = UserStore();


  // const onFormSubmit = async () => {
  //   if (!ValidationHelper.IsEmail(LoginFormData.email)) {
  //     toast.error("Valid Email Required");
  //   } else if (ValidationHelper.IsEmpty(LoginFormData.password)) {
  //     toast.error("Valid PIN Required");
  //   } else {
  //       let res=await VerifyLoginRequest(LoginFormData);
  //       console.log('login res',res)
  //       res ? navigate("/"):toast.error("Something Went Wrong !")
  //     // এখানে তুমি এখন API call করতে পারো
  //   }
  // }


  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(LoginFormData.email)) {
      toast.error("Valid Email Required");
    } else if (ValidationHelper.IsEmpty(LoginFormData.password)) {
      toast.error("Valid PIN Required");
    } else {
      let res = await VerifyLoginRequest(LoginFormData);
      console.log('login res', res);
      if (res.status === "success") {
        navigate("/");
      } else {
        toast.error(res.message || "Something Went Wrong!");
      }
    }
  };
  

  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Login Form</h4>
            <input
              value={LoginFormData.email}
              onChange={(e) => {
                LoginFormOnChange("email", e.target.value);
              }}
              placeholder="Email Address"
              type="email"
              className="form-control"
            />
            <input
              value={LoginFormData.password}
              onChange={(e) => {
                LoginFormOnChange("password", e.target.value);
              }}
              placeholder="Password"
              type="text"
              className="form-control mt-3"
            />
            <UserSubmitButton
              onClick={onFormSubmit}
              className="btn mt-3 btn-success"
              text="Next"
            />
            <h6 className="text-3x mt-3">Don't have an account? <Link to={"/register"}>Register</Link> here.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
