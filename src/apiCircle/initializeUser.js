import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const initializeUser = async () => {
  const idempotencyKey = uuidv4();

  try {
    // API'ye istek yaparken veri (data) formatını JSON olarak gönder
    const response = await axios.post('http://localhost:5000/api/initialize_user', {
       idempotencyKey,
    });

    console.log("idempotency key: ", idempotencyKey);
    return response.data.challengeId;

  } catch (error) {
    console.error('Error in initializeUser: ', error.response?.data || error.message);
  }
};

export default initializeUser;



//  const options = {
//    method: "POST",
//    url: "https://api.circle.com/v1/w3s/user/initialize",
//    headers: {
//      "Content-Type": "application/json",
//      Authorization: `Bearer  ${process.env.REACT_APP_EXCHANGE_API_KEY}`,
//      "X-User-Token": `${process.env.REACT_APP_EXCHANGE_USER_TOKEN}`,
//    },
//    data: { idempotencyKey: idempotencyKey, accountType: "SCA", blockchains: //["MATIC-AMOY"] },
//  };
//
//  return axios
//    .request(options)
//    .then(function (response) {
//      console.log("idempotency key: ", idempotencyKey);
//      return response.data.data.challengeId;
//    })
//    .catch(function (error) {
//      console.error(error);
//    });
//};
