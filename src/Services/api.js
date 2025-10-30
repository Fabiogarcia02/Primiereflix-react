import axios from 'axios';
import React, { useState, useEffect } from "react";
// base da url da API: https://api.themoviedb.org/3/

//Url da api de filmes mais populares: https://api.themoviedb.org/3/movie/now_playing?api_key=d9bace77444306ce3d18fc8f8b400725&language=pt-BR&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;