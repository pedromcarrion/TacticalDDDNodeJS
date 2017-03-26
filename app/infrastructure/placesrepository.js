import User from '../domain/user';
import Place from '../domain/place';

export default class PlacesRepository{
    constructor(){

    }

    getUser(userId){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(new User(userId, 'Pedro Martinez'));
            },500);
        });
    }

    getPlaces(userId){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(new Place('http://www.google.com', '2015-12-21', 'Description of place', 'ToVisit', 'nameofimage.jpg', null
                , 'New Place', 40.898900, 1.123123));
            },500);
        });
        
    }       

}