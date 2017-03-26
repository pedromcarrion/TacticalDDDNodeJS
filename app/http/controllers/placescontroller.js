import PlacesService from '../../services/placesservice';
import PlacesRepository from '../../infrastructure/placesrepository';

export default class PlacesController{
    constructor(){
        let placesrepository = new PlacesRepository();
        this.placesservice = new PlacesService(placesrepository);
    }

    places(req, res){
        if(1 === 1){
            this.placesservice.getUserPlaces(1).then( (values) => {
                res.status(200).json(
                    {
                        user: values[0],
                        places: values[1]
                    });
            });
        }
        else{
            res.status(500).json("Es necesario un id de usuario válido");
        }
    }
}