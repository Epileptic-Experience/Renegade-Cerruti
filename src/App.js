import Card from './components/ItemListContainer';
import './App.css';
import NavBar from './components/navbar';




function App() {
  return (

    <div >
      <NavBar></NavBar>
      <div className='ItemContainer' >
        <Card price={"4000"} src={'./una_muerte.jpg'} tittle={"una muerte en la familia"} />
        <Card price={"2300"} src={'./Crisis_tierras_infinitas.webp'} tittle={"crisis en tierras infinitas"} />
        <Card price={"6000"} src={'./deadpool_mata.jpg'} tittle={"deadpool mata al universo marvel"} />
        <Card price={"1000"} src={'/Deadpool_otravez.jpg'} tittle={"deadpool mata al universo marvel otra vez"} />
        <Card price={"12000"} src={'./FearItself.jpg'} tittle={"fear itself:Spider-man"} />
        <Card price={"12000"} src={'./Liga_oscura.jpg'} tittle={"Liga de la justicia oscura"} />
      </div>
    </div>


  );
}

export default App;
