import axios from "axios";

export function makeApi() {
  return axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
  });
}

export function getEpisodes(page = 1, api = makeApi()) {
  return api.get(`/episode?page=${page}`);
}

export function getEpisode(episodeId, api = makeApi()) {
  return api.get(`/episode/${episodeId}`);
}

export function getUrl(url, api = makeApi()) {
  return api.get(url);
}

export function getCharacter(characterId, api = makeApi()) {
  return api.get(`/character/${characterId}`);
}

export function getLocation(locationId, api = makeApi()) {
  return api.get(`/location/${locationId}`);
}
