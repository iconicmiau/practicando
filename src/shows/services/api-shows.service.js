import axios from 'axios';

import { ShowAssembler } from "./show-assembler.js";

const showsApiUrl = import.meta.env.VITE_SHOWS_API_URL;

const http = axios.create({
    baseURL: showsApiUrl,
});

export class ApiShowsService {
    static getData() {
        return http.get('')
            .then((response) => {
                const data = response.data;
                return data.map((item) => ShowAssembler.toEntityFromResource(item));
            });
    }
}