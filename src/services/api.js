// client/src/api.js

import axios from 'axios';

export default() => axios.create({ baseURL: process.env.SERVER_API });
