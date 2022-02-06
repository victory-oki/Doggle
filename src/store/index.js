import Vue from "vue";
import Vuex from "vuex";
import DogService from "../services/dog.service";
import {
  SET_SELECTED_BREED,
  SET_IMAGE_LOADING,
  GET_BREEDS,
  GET_RANDOM_IMAGES,
  GET_IMAGES_BY_BREED
} from './mutation-types';
import {flattenResult, getBreedQuery} from './helper'

Vue.use(Vuex);
const state = {
  isImagesLoading: false, 
  selectedBreed: "",
  breeds: [],
  images: [],
};

const mutations = {
  [SET_SELECTED_BREED](state, payload) {
    state.selectedBreed = payload;
  },
  [GET_BREEDS](state, payload) {
    state.breeds = payload;
  },
  [GET_RANDOM_IMAGES](state, payload) {
    state.images = payload;
  },
  [GET_IMAGES_BY_BREED](state, payload) {
    state.images = payload;
  },
  [SET_IMAGE_LOADING](state, payload) {
    state.isImagesLoading = payload
  }
};

const actions = {
  setBreedAction({ commit, dispatch }, selectedBreed) {
    commit(SET_SELECTED_BREED, selectedBreed);
    const query = getBreedQuery(selectedBreed)
    dispatch('getImagesByBreedAction', query)
  },

  async getBreedsAction({ commit }) {
    console.log(DogService)
    const raw = await DogService.listAllBreeds();
    const result = raw.data.message;
    let breeds = flattenResult(result);
    commit(GET_BREEDS, breeds);
  },
  
  async getRandomImagesAction({ commit }) {
    commit(SET_IMAGE_LOADING, true);
    try{
      const response = await DogService.getRandomDogImages();
      const response2 = await DogService.getRandomDogImages();
      const result = response.data.message;
      const result2 = response2.data.message;
      let images = result.concat(result2);
      commit(GET_RANDOM_IMAGES, images);
      commit(SET_IMAGE_LOADING, false);
    }
    catch{
      commit(GET_RANDOM_IMAGES, []);
      commit(SET_IMAGE_LOADING, false);
    }
  },
  async getImagesByBreedAction({ commit },query) {
    commit(SET_IMAGE_LOADING, true);
    commit(GET_RANDOM_IMAGES, []);
    const response = await DogService.getDogImagesByBreed(query);
    const result = response.data.message;
    let images = result;
    commit(GET_IMAGES_BY_BREED, images);
    commit(SET_IMAGE_LOADING, false);
  },
};

const modules = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
