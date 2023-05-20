import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import {legacy_createStore as createStore} from "redux"
import { reducer } from "./redux";
import { Provider } from "react-redux";

function App() {
  //store oluşturduk
  const store=createStore(reducer)
  return (
    <div className="app">
      {/* tüm uygulamayı  store ile sarmaladık */}
      <Provider store={store}>
          <Counter />
          <Todo />
      </Provider>
      
    </div>
  );
}

export default App;
