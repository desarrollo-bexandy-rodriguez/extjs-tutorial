/**
 * This ViewModel provides data for the ChildSession view.
 */
Ext.define('Tutorial.view.binding.ChildSessionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.binding.childsession',

    stores: {
        // Define a store of Company records that links to the Session.
        companies: {
            model: 'Tutorial.model.Company',
            autoLoad: true,
            session: true
        }
    }
});