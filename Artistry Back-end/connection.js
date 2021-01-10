const mongoose = require( 'mongoose' ) ;

mongoose.set( 'useNewUrlParser'    , true  ) ;
mongoose.set( 'useFindAndModify'   , false ) ;
mongoose.set( 'useCreateIndex'     , true  ) ;
mongoose.set( 'useUnifiedTopology' , true  ) ;
mongoose.set( 'autoIndex'          , true  ) ;

// Importing schema 
require( "./user" ) ;
require( "./msg" ) ;

// Connects to DB
module.exports.connect = () => {
    mongoose.connect( "mongodb://localhost:27017/cart" ) 
        .then  ( val => { console.log('Connected to DB')     ; } )
        .catch ( err => { console.log('Not Connected to DB') ; } ) ;
}
