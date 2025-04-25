import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail, unauthorized } from "../utility/utility.js";
import Cookies from "js-cookie";
const UserStore = create((set) => ({
  isFormSubmit: false,

  isLogin: () => {
    return !!Cookies.get("token");
  },

  RegisterFormData: { email: "", password: "", name: "" },
  RegisterFormOnChange: (name, value) => {
    set((state) => ({
      RegisterFormData: {
        ...state.RegisterFormData,
        [name]: value,
      },
    }));
  },

  VerifyRegisterRequest: async (postbody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`/api/v1/user/signup`, postbody);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  LoginFormData: { email: "", password: "" },
  LoginFormOnChange: (name, value) => {
    set((state) => ({
      LoginFormData: {
        ...state.LoginFormData,
        [name]: value,
      },
    }));
  },

//   VerifyLoginRequest: async (postbody) => {
//     set({ isFormSubmit: true });
//     let res = await axios.post(`/api/v1/user/signin`, postbody);
//     set({ isFormSubmit: false });
//     return res.data["status"] === "success";
//   },


  VerifyLoginRequest: async (postbody) => {
    try {
      set({ isFormSubmit: true });
      let res = await axios.post(`/api/v1/user/signin`, postbody);
      set({ isFormSubmit: false });
      return res.data;
    } catch (err) {
      set({ isFormSubmit: false });
      // Error হলে সেটাও return করো
      return { status: "fail", message: err?.response?.data?.message || "Request Failed" };
    }
  },

  UserLogoutRequest: async () => {
    set({ isFormSubmit: true });
    let res = await axios.get(`/api/v1/user/logout`);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  UserMessage: null,
  UserVerifyRequest: async () => {
    let res = await axios.get(`/api/v1/user/verify`);
    if (res.data["status"] === "success") {
      set({ UserMessage: res.data["message"] });
    }
  },
}));

export default UserStore;
