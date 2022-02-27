import axios from "axios";
import config from "../../appConfig.json";

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

const apiInstance = createInstance(`${config.API_URL}/api` || "");

export default apiInstance;