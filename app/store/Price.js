Ext.define('Tutorial.store.Price', {
    extend: 'Ext.data.Store',

    alias: 'store.pricelist',

    model: 'Tutorial.model.Price',

    storeId: 'pricelist',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        url: 'data/price.json'
    },

});