Ext.define('Tutorial.store.Warehouse', {
    extend: 'Ext.data.Store',

    alias: 'store.warehouselist',

    model: 'Tutorial.model.Warehouse',

    storeId: 'warehouselist',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        url: 'data/warehouse.json'
    },

});