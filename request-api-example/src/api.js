import axios from "axios";

const searchImages = async (text) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: "Client-ID HOdcDiP5zhysPnKjyFYiGYjUNPwsRh9udgA4amSwfcQ",
    },
    params: {
      query: text,
    },
  });

  return response.data.results;
};

export default searchImages;
