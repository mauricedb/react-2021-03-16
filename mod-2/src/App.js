import { Provider } from 'react-redux';

import { Page } from './components/page';

import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Unit Testing</h1>
        <Page />
      </div>
    </Provider>
  );
}

export default App;
