import { Route, Routes } from 'react-router-dom';
import './GLOBAL.css';
import Page1 from './Pages/Page1/Page1.component';
import Page2 from './Pages/Page2/Page2.component';
import Page3 from './Pages/Page3/Page3.component';
import Page4 from './Pages/Page4/Page4.component';


export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Page1 /> } />
      <Route path='/D2' element={ <Page2 />} />
      <Route path='/D3' element={ <Page3 />} />
      <Route path='/D4' element={ <Page4 />} />
    </Routes>

    </>
  );
}
