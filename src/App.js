import { Component } from "react";

import SearchBox from './components/search-box/search-box.component';
import './App.css'  
import CardList from "./components/card-list/card-list.component";


import { useState , useEffect } from "react";

const App = () => {
  const [searchField , setSearchField] = useState (''); //[value, setValue]
  const [monsters , setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);


  console.log('render')

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> setMonsters(users))
  },[])

  useEffect(()=> {
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilterMonsters (filteredMonsters)
    console.log('filtering')
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };



  return (
    <div className="App">
      <h1 className= 'app-title'> Monsters Rolodex </h1>

      <SearchBox
      onChangeHandler = {onSearchChange}
      placeHolder = ' search monsters '
      className = ' monsters-search-box '
      />

      <CardList monsters = { filteredMonsters }/>
    </div>     
  )
}

export default App
