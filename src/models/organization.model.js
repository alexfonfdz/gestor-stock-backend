import moongose from 'mongoose';

const organizationSchema = new moongose.Schema({
    nameOrganization: {
        type: String,
        required: true,
        trim: true,
    }
});

export default moongose.model('Organization', organizationSchema);