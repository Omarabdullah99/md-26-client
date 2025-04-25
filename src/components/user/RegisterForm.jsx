import React from "react";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import UserSubmitButton from "./UserSubmitButton";
import UserStore from "../../store/UserStore";

const RegisterForm = () => {
  let navigate = useNavigate();
  let { RegisterFormData, RegisterFormOnChange, VerifyRegisterRequest } =
    UserStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(RegisterFormData.email)) {
      toast.error("Valid Email Required");
    } else if (ValidationHelper.IsEmpty(RegisterFormData.name)) {
      toast.error("name is Required");
    } else if (ValidationHelper.IsEmpty(RegisterFormData.password)) {
      toast.error("Valid PIN Required");
    } else {
      let res = await VerifyRegisterRequest(RegisterFormData);
      res ? navigate("/login") : toast.error("Something Went Wrong !");
      // এখানে তুমি এখন API call করতে পারো
    }
  };

  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Register Form</h4>
            <input
              value={RegisterFormData.name}
              onChange={(e) => {
                RegisterFormOnChange("name", e.target.value);
              }}
              placeholder="Name"
              type="text"
              className="form-control mt-3"
            />
            <input
              value={RegisterFormData.email}
              onChange={(e) => {
                RegisterFormOnChange("email", e.target.value);
              }}
              placeholder="Email Address"
              type="email"
              className="form-control mt-3"
            />
            <input
              value={RegisterFormData.password}
              onChange={(e) => {
                RegisterFormOnChange("password", e.target.value);
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
            <h6 className="text-3x mt-3">
              Don't have an account? <Link to={"/login"}>Login</Link>{" "}
              here.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
