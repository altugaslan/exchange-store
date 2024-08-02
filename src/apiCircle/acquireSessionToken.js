import axios from "axios";

export const acquireSessionToken = async () => {


  const options = {
    
    method: "POST",
    url: "https://api.circle.com/v1/w3s/users/token",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_EXCHANGE_API_KEY}`,
    },
    data: { userId: process.env.REACT_APP_EXCHANGE_USER_ID },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log("user token:", response.data.data.userToken);
      console.log("encryption key:", response.data.data.encryptionKey);
      return {
        userToken: response.data.data.userToken,
        encryptionKey: response.data.data.encryptionKey,
      };
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default acquireSessionToken;