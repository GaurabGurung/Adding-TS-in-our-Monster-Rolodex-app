import { useState , useEffect } from "react";

import SearchBox from './components/search-box/search-box.component';
import './App.css'  
import CardList from "./components/card-list/card-list.component";

import { getData } from "./ultils/data.utils";

const App = () => {
  const [searchField , setSearchField] = useState (''); //[value, setValue]
  const [monsters , setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);


  console.log('render')

  useEffect (()=>{
    console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=> setMonsters(users))
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

  console.log("end line")



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
