import "./App.css";
import TextInput from "./components/input/TextInput";

function App() {
  return (
    <>
      <div className="container grid bg-slate-100 mx-auto">
        <TextInput placeholder="Email Address"></TextInput>
        <TextInput placeholder="Fullname"></TextInput>
      </div>
    </>
  );
}

export default App;
