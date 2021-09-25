import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = `https://backendexample.sanbersy.com/api/data-movie`;

const MovieAPI = {
  GetMovies: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  GetMovie: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  AddMovie: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}`, data, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  EditMovie: async (id, data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, data, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  DeleteMovie: async (id) => {
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

export default MovieAPI;
