import moongose from 'mongoose';

const productSchema = new moongose.Schema({
    idOrganization: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    idUnitType: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'UnitType',
        required: true,
    },
    nameProduct: {
        type: String,
        required: true,
        trim: true,
    },
    minAlertProduct: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
        max: 999,
    },
    priceProduct: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
        max: 999999999,
    },
    statusProduct: {
        type: Boolean,
        default: true,
        required: true,
    }
});

export default moongose.model('Product', productSchema);