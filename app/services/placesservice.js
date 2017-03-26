
export default class PlacesService {
    constructor(placesRepository){
        this.repository = placesRepository;
    }

    getUserPlaces(userId){
        return Promise.all([
            this.repository.getUser(userId), 
            this.repository.getPlaces(userId)
            ]);;
    }
}