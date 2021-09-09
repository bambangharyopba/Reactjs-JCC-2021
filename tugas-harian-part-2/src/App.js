import logo from './logo.png';
import './App.css';
import List from './components/List'
import Card from './components/Card'
import Button from './components/Button';

function App() {
  var items = [
    {
      id: 1,
      label: "Belajar Git & CLI"
    },
    {
      id: 2,
      label: "Belajar HTML & CSS"
    },
    {
      id: 3,
      label: "Belajar Javascript"
    },
    {
      id: 4,
      label: "Belajar ReactJS Dasar"
    },
    {
      id: 5,
      label: "Belajar ReactJS Advance"
    }
  ]

  return (
    <div className="App">
      <div className="wrapper">
        <Card className="card">
          <div className="img-container"> 
            <img src={logo} alt="logo" className="App-logo" />
          </div>
          <h2 className="card-title">THINGS TO DO</h2>
          <p className="card-paragraph">During Bootcamp in Jabarcodingcamp</p>
          <List items={items} />
          <Button label="Send"/>
        </Card>
      </div>
    </div>
  );
}

export default App;
