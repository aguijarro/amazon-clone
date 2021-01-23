import "./App.css";
import CartItem from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItem />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
