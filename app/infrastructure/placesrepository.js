const User = require('../domain/user');
const Place = require('../domain/place');
const mysql = require('mysql');
const Knex = require('knex');

class PlacesRepository{
    constructor(host, port, user, password, database){
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    async getKenex(){
        return new Knex({
                        client: 'mysql',
                        connection: {
                            host : this.host,
                            user : this.user,
                            password : this.password,
                            database : this.database,
                            port: this.port
                        }
                    });
    }
    

    async getUser(userId){
        return new Promise((resolve, reject) => {
            
            try {
                let knex = this.getKenex();
                let rows = await(knex.columns('id_user','name').where({id_user: userId}).select().from('users'));
                
                if(rows.length > 0){
                    return resolve(new User(rows[0].id_user, rows[0].name));
                } else { 
                    return reject('El usuario no existe en la BBDD, id: ' + userId);
                }
            }
            catch(err) {
                console.log('Error en el método getUser de PlacesRepository',error);
                return reject(error);
            }
            finally{
                knex.destroy();
            }
        });
    }

    getPlaces(userId){
        

        return new Promise((resolve, reject) => {

            let knex = this.getKenex();
            let rows = await(knex.columns('link','date','description', 'status','image','category','name','longitude','latitude')
            .where({id_user: userId})
            .select()
            .from('places').innerJoin('places_base','places.id_place_base','places_base.id_place_base'));

            try{
                var places = [];

                for(let i = 0, length = rows.length; i < length; i++){
                    places.push(new Place(rows[i].link, rows[i].date, rows[i].description, rows[i].status, rows[i].image, rows[i].category
                    , rows[i].name, rows[i].longitude, rows[i].latitude));
                }
            
                return resolve(places);
            }
            catch(err){
                console.log('Error en el método getPlaces de PlacesRepository',error);
                return reject(error);
            }
            finally{
                 knex.destroy();
            }
        });
        
    }       

}

module.exports = PlacesRepository;