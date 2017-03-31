
export default class PlacesService {
    constructor(placesRepository){
        this.repository = placesRepository;
    }

    getUserPlaces(userId){

         return this.repository.getUser(userId).then(user => {
            return this.repository.getPlaces(user.id).then((places) => {
                user.setPlaces(places);

                return new Promise((resolve, reject) => {
                    if(user){
                        resolve(user);
                    }else{
                        reject('error!!!!')
                    }
                });
            }).catch(err => { console.log('Error llamando a getPlaces del repository')});
        }).catch(err => { console.log('Error llamando a getUser del repository')});

    }
}