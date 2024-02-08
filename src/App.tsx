import './App.css';
import Header from './components/header/Header';
import './assets/fonts/fonts.css';
import Questions from './components/questions/Questions';
import Clinic from './components/clinic/Clinic';
import Slider from './components/slider/Slider';
import Bottom from './components/bottom/Bottom';
import Form from './components/form/Form'
import {Provider} from './components/Context';

function App() {
  
  return (
    <>
    <Provider>
        <Header />
        <Clinic />
        <Questions />
        <Slider />
        <Bottom />
        <Form />
    </Provider>
    </>
  );
}

export default App;
