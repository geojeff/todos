// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
// For the Todos app, storeType will be 'FromFixtures', so we will
// go directly to the LOADING_DATA state, to prepare for showing the app.
//
Todos.STARTING = SC.State.design({
  enterState: function() {
    if (Todos.get('storeType') === 'FromSomeBackendDatasource') {
      this.gotoState('LOGGING_IN');
    } else if (Todos.get('storeType') === 'FromFixtures') {
      this.gotoState('LOADING_DATA');
    }
  },
 
  exitState: function() {
    // Nothing to worry about here.
  }
});
