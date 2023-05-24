
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import Vista from './componets/Vista/Vista';
import Categorias from './componets/Categorias/Categorias';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='*' element={ <h2> Sitio en construcción </h2> }/>
        </Routes>
        </BrowserRouter>

        
        
        
        
        <Vista/>

        <Categorias/>
      </>
  );
}

export default App;
