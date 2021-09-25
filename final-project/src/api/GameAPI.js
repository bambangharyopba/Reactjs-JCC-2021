import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = `https://backendexample.sanbersy.com/api/data-game`;

const GameAPI = {
  GetGames: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  GetGame: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  AddGame: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}`, data, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  EditGame: async (id, data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, data, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  DeleteGame: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default GameAPI;
