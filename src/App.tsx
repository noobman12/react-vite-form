import "./App.css";
import MyForm from "./components/MyForm";
import MyFormRegister from "./components/MyFormRegister";

function App() {
  return (
    <div className='flex flex-col gap-5'>
      <MyForm></MyForm>
      <MyFormRegister></MyFormRegister>
    </div>
  );
}

export default App;
