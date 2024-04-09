import moongose from 'mongoose';

const userTypeSchema = new moongose.Schema({
    nameUserType: {
        type: String,
        required: true,
        trim: true,
    }
});

export default moongose.model('UserType', userTypeSchema);