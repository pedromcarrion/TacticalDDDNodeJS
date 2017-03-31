export default class User {
    constructor(id, name, places = []){
        this.id = id;
        this.name = name;
        this.places = places;
    }

    setPlaces(places){
        this.places = places;
    }
}