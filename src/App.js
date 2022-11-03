import React, { Component } from 'react';
import Images from './images'
import './App.css'; 
import CartList from './Components/cart-list/cart-list.component';
import SearchBox from './Components/search-box/serach-box.component'; 


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
              name: 'potato',
              id: '1',
              url: ''
            },
            {
              name: 'tomato',
              id: '2',
              quantity: '5'
            },
            {
              name: 'beans',
              id: '3',
              quantity: '8'
            },
            {
              name: 'onion',
              id: '4'
            },
            {
              name: 'bellpepper',
              id: '5'
            },
            {
              name: 'carrot',
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
        <SearchBox  
          className='search-box' 
          onChangeHandler= { onSearchChange } 
          placeholder='search veggies'/>
        <CartList veggies= { filteredVeggies } /> 
        <Images />
      </div>
      );
      
  }
}

export default App;
