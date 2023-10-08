import Layout from './components/layout/Layout';
import AstroEvents from './components/pages/AstroEvents';
import BookTicket from './components/pages/BookTicket';
import Chatbot from './components/pages/Chatbot';
import EcoEvents from './components/pages/EcoEvents';
import Home from './components/pages/Home';
import './styles/global.css';
import './styles/style.scss';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AstroEvents />} path='/astro-events' />
        <Route element={<EcoEvents />} path='/eco-events' />
        <Route element={<Chatbot />} path='/chatbot' />
        <Route element={<BookTicket />} path='/book-ticket' />
      </Routes>
    </Layout>
  )
}

export default App