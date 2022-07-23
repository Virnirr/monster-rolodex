import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// The functional component is the same as the class component since they are rendering the same thing. However, in class component, you tell react specifically what you want react to render by overridding the render() method.
class App extends Component {
  // constructor is always called first and build the foundation for the class with attributes.
  // In react, to keep a state object in a class component, you would need to call super(), which calls the constructor of the Component class
  // You need to instantiate the state of the component, which is just the data used to delcare how your app is going to change based on the state object that you set.

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    //Since the HTTP response is not a JSON Object,
    //.json() extracts the JSON Object from the HTTP response
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        /> */}
        {/* {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))} */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
