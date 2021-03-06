Ext.define('Tutorial.model.Category', {
    extend: 'Ext.data.Model',

    fields: [
    	{ name: 'id', type: 'int' },
    	{ name: 'name', type: 'string' }
    ],
    belongsTo: 'Tutorial.model.Product'
});