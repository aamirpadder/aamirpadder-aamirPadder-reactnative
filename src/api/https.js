import axios from 'axios';
import {BASEURL} from './config';

let headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

let client = axios.create({
  baseURL: BASEURL,
  withCredentials: false,
});

client.interceptors.request.use(async config => {
  //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhbWlyLnBhZGRhckBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYWFtaXJwYWRkZXIiLCJpYXQiOjE2NjIwNTEzNzIsImV4cCI6MTY2MjQ4MzM3Mn0.WjBipAyTTVgncpbPbX1YsxrHO8y71Zv2AJG0Pbkg9bw';
  let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpZ2VwbzMwMzFAb3JseWRucy5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYWFtaXJwYWRkZXIiLCJpYXQiOjE2NjQzODYxODEsImV4cCI6MTY2NDgxODE4MX0._qQyWVOuo8vxob9BhqSYd4Prvit4je6wbrzg1Xm7-kk';
  config.headers.Authorization = `Bearer ${token}`;
  console.log('-------config--------', config);
  return config;
});

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (res) {
    const {response} = res;

    console.log('errr axios=>', res);
    return Promise.reject({status: response.status, ...response.data});
  },
);

export default {
  get: async function (url, data) {
    return new Promise((resolve, reject) => {
      client
        .get(url, {params: data})
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          // console.log("errorget",error)
          reject(error);
        });
    });
  },
  post: async function (url, data) {
    return new Promise((resolve, reject) => {
      client
        .post(url, data)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  put: async function (url, data) {
    return new Promise((resolve, reject) => {
      client
        .put(url, data)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  delete: async function (url, data) {
    return new Promise((resolve, reject) => {
      client
        .delete(url, data)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetch: options => client(options),
  //
};
