Ext.define('Tutorial.store.Tax', {
    extend: 'Ext.data.Store',

    alias: 'store.taxlist',

    model: 'Tutorial.model.Tax',

    storeId: 'taxlist',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        url: 'data/tax.json'
    },

});
