import "./App.css";
// import Tugas10 from "./Tugas 10/Tugas10";
// import Tugas9 from "./Tugas 9/Tugas9";
// import Tugas11 from "./Tugas-11/Tugas11";
// import Tugas12 from "./Tugas-12/Tugas12";
import Tugas13 from "./Tugas-13/Tugas13";
import { MahasiswaProvider } from "./Tugas-13/MahasiswaContext";

function App() {
  return (
    <div className="App">
      {/* <div className="wrapper">
        <Tugas10 />
        <Tugas9 />
      </div> */}
      {/* <Tugas11 /> */}
      {/* <Tugas12 /> */}
      <MahasiswaProvider>
        <Tugas13 />
      </MahasiswaProvider>
    </div>
  );
}

export default App;
