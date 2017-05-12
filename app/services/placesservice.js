class PlacesService {
    constructor(placesRepository){
        this.repository = placesRepository;
    }

    async getUserPlaces(userId){
        try {
            var user = await this.repository.getUser(userId);
            var places = await this.repository.getPlaces(user.id);
            user.setPlaces(places);

            return new Promise((resolve, reject) => {
                    if(user){
                        resolve(user);
                    }else{
                        reject('error!!!!')
                    }
                });

        } catch(err) {
            console.log('Error en el método getUserPlaces de PlacesService', err);
        }
    }
}

module.exports = PlacesService;