import './App.css';
import { Home } from './components/Home'
import { Route, Routes, Link } from 'react-router-dom';
import Counter from './components/Counter';
import { Form } from './components/Form';
import { Searchandchange } from './components/Searchandchange';


export default function App() {
  
  return (<>
  <nav className='top-nav' >
      <Link id="home" to="/"> Home </Link>
      <Link id="Counter" to="/Counter"> Counter with redux</Link>
  </nav>
  <hr/>
  <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="Counter" element={<Counter />} />
      <Route path="form" element={<Form />} />
      <Route path="Searchandchange" element={<Searchandchange />} />
      
    </Route>
  </Routes>
</>
)
}
