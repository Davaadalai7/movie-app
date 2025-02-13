import axios from "axios";

const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb";

const movieAPi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const FetchDetailedMovie = async (id: number) => {
  try {
    const response = await movieAPi.get(
      `/movie/${id}?language=en-US&${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
