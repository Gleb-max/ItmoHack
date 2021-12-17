import axios from 'axios';
import {apiConfig} from './config';

const client = axios.create({
  baseURL: apiConfig.baseUrl,
});

export default client;
