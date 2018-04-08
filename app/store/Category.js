Ext.define('Tutorial.store.Category', {
    extend: 'Ext.data.Store',

    alias: 'store.categorylist',

    model: 'Tutorial.model.Category',

    storeId: 'categorylist',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        url: 'data/category.json'
    },

});