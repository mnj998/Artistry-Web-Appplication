const db = require( './connection.js' ) ;
db.connect() ;

const respond = require( "./response" );

const cors         = require( 'cors'                 ) ;
const express      = require( 'express'              ) ;
const cookieParser = require( 'cookie-parser'        ) ;
                     require( 'express-async-errors' ) ; 

const corsOptions = {
    origin: [ 'http://127.0.0.1:5500', 'http://192.168.225.4:3000' ],
    credentials: true,
}
let app = express();
app.use( cookieParser(), cors( corsOptions ), express.json() ) ;
app.use( requestLogger ) ;

const User = require( "./user");
app.post( "/user/sign-up", User.signUp );
app.post( "/user/sign-in", User.signIn );

const Msg = require( "./msg");
app.post( "/msg/add", Msg.addMsg );
app.get( "/msg/get", Msg.getMsg );

app.use( respond.errHandler ) ;

app.listen( 9999, () => { console.log( 'Listening on port ' + 9999 ) } ) ;

let ID = 1;
function requestLogger ( req, res, next ) {
   console.log( '\n\n' ) ; // -Deb
   console.log( { ID : ID, URL : req.url, Method : req.method, Body : req.body, } ) ; // -deb
   res.ID = ID++ ;    res._TS = new Date() ; // -Deb
   return next();
}
