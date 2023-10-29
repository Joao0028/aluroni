import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
// import Cardapio from '';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import Prato from 'pages/Prato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(()=> import("pages/Cardapio"));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
       <Suspense fallback={<>Carregando...</>}>
       <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
       </Suspense>
      </Router>
    </main>
  );
}