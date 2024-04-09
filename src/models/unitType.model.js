import moongose from 'mongoose';

const unitTypeSchema = new moongose.Schema({
    nameUnitType: {
        type: String,
        required: true,
        trim: true,
    }
});

export default moongose.model('UnitType', unitTypeSchema);