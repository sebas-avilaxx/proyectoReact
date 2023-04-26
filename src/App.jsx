
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';


function App() {
  return (
      <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido" />
      </>
  );
}

export default App;
