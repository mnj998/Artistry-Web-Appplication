const mongoose = require( 'mongoose' ) ;
const respond = require( "./response");
var msgSchema = new mongoose.Schema ({
    name: String,
    phone: String,
    email: String,
    msg: String
});
msgSchema.statics.addMsg = async ( req, res  ) => {
    const msg = new Msg();
    Object.assign( msg, req.body );
    await msg.save();
    return respond.ok( res );
} 

msgSchema.statics.getMsg = async ( req, res ) => {
    return respond.ok( res, { msg : await Msg.find() } );
} 

const Msg = mongoose.model( 'msgs', msgSchema ) ;
module.exports = Msg;