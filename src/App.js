import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Laptop', price: 90000 },
    { name: 'iPhone', price: 60000 },
    { name: 'Watch', price: 5000 },
    { name: 'Deblat', price: 5000 }
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Laptop" price="75000"></Product>
      <Product name="iPhone" price="55000"></Product>
      <Product name="Watch" price="5000"></Product> */}
    </div>
  );
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
