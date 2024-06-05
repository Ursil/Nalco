import { Outlet } from 'react-router-dom';
import './App.css'
import NavigationBarD from './components/DocNavigation';
function App() {

  return (
     <div>
    
     <NavigationBarD/>
     <Outlet />
      
   </div>
   
  )
}

export default App
