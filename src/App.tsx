import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { Home } from './pages/Home/Home';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
