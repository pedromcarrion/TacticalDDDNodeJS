import PlaceBase from './placebase';

export default class Place extends PlaceBase{
    constructor(link, date, description, status, image, category, name, latitude, longitude){
        super(name, latitude, longitude);
        this.link = link;
        this.date = date;
        this.description = description;
        this.status = status;
        this.image = image;
        this.category = category;
    }
}