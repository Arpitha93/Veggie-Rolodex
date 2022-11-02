import { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 

// using Functional components

const App1 = () => {

    const [searchField, setSearchField] = useState(''); //initial value of the state (empty string) in returns we get [value, setValue]
        
        const [veggies, setVeggies] = useState('[]');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setVeggies(users));
            }

    const onSearchChange = (event) => {
        console.log(event.target.value);
        const searchFieldString = event.target.value.toLocaleLowerCase();
         
            setSearchField(searchFieldString);
       
      };

      
    const filteredVeggies = veggies.filter((veggie) => {
        return veggie.name.toLocaleLowerCase().includes(searchField);
      });
  

    return(
        <div className='App1'>
            <SearchBox  
            className='search-box' 
            onChangeHandler= { onSearchChange } 
            placeholder='search veggies'/>
        <CartList veggies= { filteredVeggies } /> 

        </div>
    );
}

export default App1;