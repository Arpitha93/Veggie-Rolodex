import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import CartList from './Components/cart-list/cart-list.component'; 


// using function components

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           To know more!
//         </p>
//         <button>Click here</button>
//       </header>
//     </div>
//   );
// }

//using class components

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       Switch: 'Off', 
//     };
//   }
//   render() {
//     return(
//       <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           To know more!
//         </p>
//         <button>Click here</button>
//         <p>For switch toggle</p>
//         <button onClick={() => {
//           this.setState( { Switch: 'On' });
//           }}
//         > { this.state.Switch } </button>
      
//        </header>
//      </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  constructor() {
      super();

      this.state = {
          veggies: [
            {
              name: 'Potato',
              id: '1'
            },
            {
              name: 'Tomato',
              id: '2'
            },
            {
              name: 'Beans',
              id: '3'
            },
            {
              name: 'Onion',
              id: '4'
            },
            {
              name: 'Bellpepper',
              id: '5'
            },
            {
              name: 'Carrot',
              id: '6'
            },
          ],
          searchStr: ''  
         
      };
      console.log('Constructor');
  }
//   componentDidMount() {
//     console.log('Component mount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//     this.setState(
//       () => {
//         return { veggies: users };
//       },
//       () => {
//         console.log(this.state );
//       }
//     )
//   );
// }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
     this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('Render');

    const { veggies, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredVeggies = veggies.filter((veggie) => {
      return veggie.name.toLocaleLowerCase().includes(searchField);
    });

      return (
      <div className='App'>
        <input 
          className='search-box' 
          type='search' 
          placeholder='search veggies' 
          onChange={ onSearchChange }/>
          {/* { filteredVeggies.map((veggie) => {
            return (
            <div>
              <h1> { veggie.name } </h1>
            </div>);
          })} */}
          <CartList veggies= { filteredVeggies } />
          <button > Click

          </button>
      </div>
      );
  }
}

export default App;
