import './App.css';
import MultilingualKeyboard from './components/MultilingualKeyboard';
import NumericKeyboard from './components/NumericKeyboard';
import VirtualKeyboard from './components/VirtualKeyboard';
import VirtualKeyboardWithCustomLayout from './components/VirtualKeyboardWithCustomLayout';

function App() {
  return (
    <div>
      <VirtualKeyboard />
      <MultilingualKeyboard/>
      <VirtualKeyboardWithCustomLayout/>
      <NumericKeyboard/>
    </div>
  );
}

export default App;
