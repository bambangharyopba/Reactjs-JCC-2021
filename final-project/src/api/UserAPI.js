import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = `https://backendexample.sanbersy.com/api`;

const UserAPI = {
  RegisterUser: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  LoginUser: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/user-login`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  ChangePasswordUser: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/change-password`, data, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserAPI;
