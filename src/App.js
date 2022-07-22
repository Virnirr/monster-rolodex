import { Component } from "react";
import "./App.css";

// The functional component is the same as the class component since they are rendering the same thing. However, in class component, you tell react specifically what you want react to render by overridding the render() method.
class App extends Component {
  // constructor is always called first and build the foundation for the class with attributes.
  // In react, to keep a state object in a class component, you would need to call super(), which calls the constructor of the Component class
  // You need to instantiate the state of the component, which is just the data used to delcare how your app is going to change based on the state object that you set.

  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    //Since the HTTP response is not a JSON Object,
    //.json() extracts the JSON Object from the HTTP response
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const value = event.target.value;
            const filteedMonsters = this.state.monsters.filter((monster) => {
              return monster.name.includes(event.target.value);
            });
            this.setState(() => 
            return {
               monsters: filteedMonsters
            });

            this.setState(
              (monsters) => {
                return {
                  monsters: monsters.monsters.filter((monster) => {
                    return monster.name.slice(0, value.length) === value;
                  }),
                };
              },
              () => {
                console.log(this.state.monsters);
              }
            );
          }}
        />
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
