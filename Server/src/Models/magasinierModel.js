const mongoose = require('mongoose');


const magasinierSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
   role: {
        type: String,
        required: false,
        default:"magasinier",
    },
    username: {
        type: String,
        required: false
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    agence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agence',
        required: true
    },
    telephone: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('magasiniers', magasinierSchema);