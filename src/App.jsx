import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Packaging from './pages/Packaging'
import SvgEditor from './pages/SvgEditor'
import FlatContainerDisplay from './pages/FlatContainerDisplay'
import SecondContainerDisplay from './pages/SecondContainerDisplay'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/karomi/works" element={<Packaging/>}/>
        <Route path="/svg/editor" element={<SvgEditor/>}/>
        <Route path='/view/flatcontainer' element={<FlatContainerDisplay/>}/>
        <Route path="/view/container" element={<SecondContainerDisplay/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
