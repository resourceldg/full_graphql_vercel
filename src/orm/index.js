
//configuraciones
import {$db} from '../../config'
const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');


//db conexion
const { database, username, password, dialect}= $db()

const sequelize = new Sequelize(database,username,password,{
    dialect,
    define:{
        underscored:true
    }
})

//modelos
const modelDefiners = [
	require('./models/User.model'),
	require('./models/Comment.model'),
    require('./models/Post.model'),
    require('./models/Tag.model'),
    require('./models/Category.model'),
    
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner = sequelize;
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;