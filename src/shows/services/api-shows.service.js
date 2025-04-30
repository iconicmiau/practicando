import axios from 'axios';
import {ShowAssembler} from "./show-assembler.js";

export class ApiShowsService {

    static getData (){
        return axios.get("https://api.tvmaze.com/shows/1/episodes").
        then((response) => {
            const data = response.data;

            const shows = data.map((item) => {
                return ShowAssembler.toEntityFromResource(item);

            })

            return shows;
        })
    }

}