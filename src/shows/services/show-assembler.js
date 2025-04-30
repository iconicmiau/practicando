import {ShowsEntity} from "../model/shows.entity.js";


export class ShowAssembler {
    static toEntityFromResource(resource) {

        console.log(resource.url)
        const show = new ShowsEntity(resource.id, resource.name, resource.season,
            resource.number, resource.summary, resource.url, resource.image.medium)

        return show;
    }
}