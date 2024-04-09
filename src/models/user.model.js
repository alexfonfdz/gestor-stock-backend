import moongose from 'mongoose';

const userSchema = new moongose.Schema({
    idOrganization: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    idUserType: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'UserType',
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    deleteDate: {
        type: Date,
    },
    statusUser: {
        type: Boolean,
        default: true,
        required: true,
    },
});

export default moongose.model('User', userSchema);