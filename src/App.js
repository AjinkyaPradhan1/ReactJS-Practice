import '../src/App.css';
import Name from './childFiles/changeName.js'
import ModeDoc from './childFiles/mode.js'
import Clock from './childFiles/clock.js'
import Counter from './childFiles/counter.js'
import Greeting from './childFiles/greeting.js'
import CharCounter from './childFiles/charCounter.js'
import ToastFile from './childFiles/toast.js'
import ImageCarousel from './childFiles/imageCarousel.js';
import CascadingDropdown from './childFiles/cascadingDropdown.js'
import CascadeMultiDrop from './childFiles/cascadingMultiDropdown.js';
import MultiCascadeDropdown2 from './childFiles/multiaCascadeType2.js';
import Calculator from './childFiles/calculator.js';
import RandomQuote from './childFiles/randomQuote.js';
import FileUploader from './childFiles/fileUploader.js';

function App() {
  return (
    <div className="App">
        <h4>R1</h4>
        <Name/>
        --------------------------------------------------------
        <h4>R2</h4>
        <ModeDoc/>
        --------------------------------------------------------
        <h4>R3</h4>
        <Clock/>
        --------------------------------------------------------
        <h4>R4</h4>
        <Counter/>
        --------------------------------------------------------
        <h4>R5</h4>
        <Greeting/>
        --------------------------------------------------------
        <h4>R6</h4>
        <CharCounter/>
        --------------------------------------------------------
        <h4>R7</h4>
        <ToastFile/>
        --------------------------------------------------------
        <h4>R8</h4>
        <ImageCarousel/>
        --------------------------------------------------------
        <h4>R9</h4>
        <CascadingDropdown/>
        --------------------------------------------------------
        <h4>R10</h4>
        <CascadeMultiDrop/>
        --------------------------------------------------------
        <h4>R11</h4>
        <MultiCascadeDropdown2/>
        --------------------------------------------------------
        <h4>R12</h4>
        <Calculator/>
        --------------------------------------------------------
        <h4>R13</h4>
        <RandomQuote/>
        --------------------------------------------------------
        <h4>R14</h4>
        <FileUploader/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}

export default App;
