const PlacesService = require('../../services/placesservice');
const PlacesRepository = require('../../infrastructure/placesrepository');
const Config = require('../../configuration/config');

class PlacesController{
    constructor(){
        let placesrepository = new PlacesRepository(Config.db.host, Config.db.port, Config.db.user,Config.db.password,Config.db.database);
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