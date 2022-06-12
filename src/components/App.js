import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { agregarPedidoLocalS } from '../redux/reducers/pedidosReducer';
import { AppRoutes } from '../routes/AppRouter';
import '../style/App.css';


function App() {
  const dispatch = useDispatch();

  const getDataLocalS = () => {
    let localS = JSON.parse(localStorage.getItem('cart'));
    if (localS) {
      dispatch(agregarPedidoLocalS(localS));
    } else {
      return
    }
  }

  useEffect(() => {
    getDataLocalS()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
