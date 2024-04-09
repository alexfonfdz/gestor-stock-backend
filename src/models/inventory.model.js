import moongose from 'mongoose';

const inventorySchema = new moongose.Schema({
    idOrganization: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    idProduct: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    amountProduct: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
        max: 999999999,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
        min: 0,
    },
    statusInventory: {
        type: Boolean,
        default: true,
        required: true,
    },
});

export default moongose.model('Inventory', inventorySchema);