const PlacesService = require('../../services/placesservice');
const PlacesRepository = require('../../infrastructure/placesrepository');

class PlacesController{
    constructor(){
        let placesrepository = new PlacesRepository('127.0.0.1', 8889,'root','root','dddnodejs');
        this.placesservice = new PlacesService(placesrepository);
    }

    async places(req, res){
        if(req.params.userId){
            let user = await this.placesservice.getUserPlaces(req.params.userId);
            res.status(200).json({user: user});
        }
        else{
            res.status(500).json("Es necesario un id de usuario válido");
        }
    }
}

module.exports = PlacesController;