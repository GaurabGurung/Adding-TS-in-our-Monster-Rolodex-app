import { useState , useEffect, ChangeEvent } from "react";

import SearchBox from './components/search-box/search-box.component';
import './App.css'  
import CardList from "./components/card-list/card-list.component";

import { getData } from "./ultils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: String;
} 


const App = () => {
  const [searchField , setSearchField] = useState (''); //[value, setValue]
  const [monsters , setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);


  console.log('render')


  useEffect (()=>{
    console.log("fetching")
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response=>response.json())
    // .then(users=> setMonsters(users))

    const fetchUsers = async () => {
      const users = await getData<Monster[]> ("https://jsonplaceholder.typicode.com/users")
      setMonsters(users);
    }

    fetchUsers();
  },[])

  useEffect(()=> {
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilterMonsters (filteredMonsters)
    console.log('filtering')
  }, [monsters, searchField])

  
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
