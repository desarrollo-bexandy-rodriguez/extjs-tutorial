/**
 * This example demonstrates an isolated child session. When the dialog is
 * created, a child session is spawned from the parent. Any changes made to
 * data in this session do not affect the parent immediately. The changes
 * are kept separate from the parent and may then be saved to the parent or
 * alternatively discarded to leave the parent in its original state.
 */
Ext.define('Tutorial.view.binding.ChildSession', {
    extend: 'Ext.panel.Panel',
    xtype: 'binding-child-session',

    title: 'All Companies',
    frame: true,
    width: 420,
    height: 320,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    viewModel: {
        type: 'binding.childsession'
    },

    controller: 'binding.childsession',

    // Create a session for this view
    session: true,

    items: [{
        flex: 1,
        xtype: 'grid',
        reference: 'companyGrid',
        bind: '{companies}',
        columns: [{
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        }, {
            dataIndex: 'phone',
            flex: 1,
            text: 'Phone'
        }, {
            xtype: 'widgetcolumn',
            width: 90,
            widget: {
                xtype: 'button',
                text: 'Edit',
                handler: 'onEditCompanyClick'
            }
        }]
    }],

    tbar: [{
        text: 'Add Company',
        handler: 'onAddCompanyClick'
    }, {
        text: 'Remove Company',
        handler: 'onRemoveCompanyClick',
        bind: {
            disabled: '{!companyGrid.selection}'
        }
    }],

    buttons: [{
        text: 'Show Changes',
        handler: 'onSessionChangeClick'
    }]
});