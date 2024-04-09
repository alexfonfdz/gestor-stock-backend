import moongose from 'mongoose';

const historyProductSchema = new moongose.Schema({
    idProduct: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    idMovementType: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'MovementType',
        required: true,
    },
    idUser: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    idOrganization: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    lastPrice: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
        max: 999999999,
    },
    newPrice: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
        max: 999999999,
    },
    note: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

export default moongose.model('HistoryProduct', historyProductSchema);