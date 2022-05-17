import MenuItem from './components/MenuItem';
import './App.css';
import NavBar from './components/navbar';
import { Grid, Container } from '@mui/system';



function App() {
  return (

    <div >
      <NavBar></NavBar>
      <div className='ItemContainer' >
        <MenuItem price={"4000"} tittle={"una muerte en la familia"} />
        <MenuItem price={"3500"} tittle={"crisis en tierras infinitas"} />
        <MenuItem price={"2000"} tittle={"la liga de la justicia"} />
        <MenuItem price={"5000"} tittle={"deadpool mata al universo marvel"} />
        <MenuItem price={"5000"} tittle={"deadpool mata al universo marvel otra maldita vez"} />
        <MenuItem price={"3500"} tittle={"amazing stories"} />
      </div>
    </div>


  );
}

export default App;
