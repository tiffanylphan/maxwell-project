import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

import createStore from '../store/mainStore';
import Main from '../containers/Main';

const MainApp = (props, _railsContext) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <Main />
    </Provider>
  );
  return reactComponent;
};

ReactOnRails.register({ MainApp });
