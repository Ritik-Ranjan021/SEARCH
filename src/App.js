import { Component } from "react";

import CardList from "./components/cardlist/card-list.components";

import SearchBox from "./components/search-box/search-box.component";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) =>
  {
    const searchField =event.target.value.toLocaleLowerCase();
      this.setState(()=>{
      return{searchField};
  });
}

  render() {
    const { monsters, searchField }= this.state;
    const { onSearchChange } = this;

    const filterdMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App">
      <h1 className="app-title">Monsster Rolodex</h1>

        {/* {filterdMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters'
          className='monsters-search-box'    
      />
        <CardList  monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
//video 38 completed