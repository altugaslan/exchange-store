
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const createUser = async () => {
  const userId = uuidv4();
  console.log('Oluşturulan UUID:', userId);
  console.log('Oluşturulan UUID:', userId);
  
  console.log('Oluşturulan Api:', process.env);

  const options = {
    method: "POST",
    url: "https://api.circle.com/v1/w3s/users",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_EXCHANGE_API_KEY}`,
    },
    data: { userId: userId },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log("user id: ", userId);
      console.log("status:", response.request.status);
      return {
        userId: userId,
        status: response.request.status,
      };
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default createUser;