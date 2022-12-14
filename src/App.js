import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Laptop', price: 90000 },
    { name: 'iPhone', price: 60000 },
    { name: 'Watch', price: 5000 },
    { name: 'Deblat', price: 5000 }
  ]
  return (
    <div className="App">
      <ExtranalUsers></ExtranalUsers>
      {/* <Counter></Counter> */}
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name="Laptop" price="75000"></Product>
      <Product name="iPhone" price="55000"></Product>
      <Product name="Watch" price="5000"></Product> */}
    </div>
  );
}

function ExtranalUsers() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data));
  }, [])
  return (
    <div>
      <h2>Extranal User</h2>
      {users.map(user => <User name={user.name} email={user.email}></User>)}
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h3>Name : {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(50);
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}

export default App;
