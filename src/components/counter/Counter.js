import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { dec, reset, ınc } from "../../redux/actions/counterAction";

const Counter = () => {
  const dispatch=useDispatch()
  // const counter=useSelector((state)=> state.counter)

  //eger index.jsx de isimleri degiştirmeseydik
  // const counter=useSelector((state)=> state.counterReducer.counter)   // şeklinde kullanmamız gerekirdi isimler kısa olsun diye key verdik count diye
  
  // const counter=useSelector((state)=> state.count.counter)
  const {counter}=useSelector((state)=> state.count)  //destractor ediyoruz dısarda acıyoruz
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button className="counter-button positive" onClick={()=>dispatch(ınc)}>increase</button>
        <button className="counter-button zero" onClick={()=> dispatch(dec)}>reset</button>
        <button className="counter-button negative" onClick={()=> dispatch(reset)}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;
