import React from 'react';
import { Provider } from 'react-redux';
import 'taro-ui/dist/style/index.scss';
import './app.less';
import store from './store';

const App = (props) => {
  // this.props.children 是将要会渲染的页面
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Provider store={store}>
      {
        props.children
      }
    </Provider>
  );
}

export default App
