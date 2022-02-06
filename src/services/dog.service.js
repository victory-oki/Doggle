import * as axios from "axios";
const baseApi = "https://dog.ceo/api";

export default {
  getRandomDogImages() {
    return axios.get(`${baseApi}/breeds/image/random/50`);
  },
  listAllBreeds() {
    return axios.get(`${baseApi}/breeds/list/all`);
  },
  getDogImagesByBreed(breedName){
    return axios.get(`${baseApi}/breed/${breedName}/images`);
  }
};
