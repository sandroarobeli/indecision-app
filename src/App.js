import React from "react";
// import "./App.css";
import validator from "validator";
import Header from "./components/Header.js";
import Options from "./components/Options.js";
import AddOption from "./components/AddOption";
import Action from "./components/Action";
import RemoveAll from "./components/RemoveAll";
import Counter from "./components/Counter";
import OptionModal from "./components/OptionModal";
// Using SCSS in this project (learning)
// requires--> yarn add sass-loader node-sass <--
// NORMALIZE is used to bring ALL the
// different browsers to same styling!
import "normalize.css/normalize.css";
import "./styles/styles.scss";

console.log(validator.isEmail("sandroarobeliyahoo.com"));
/*
const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
};
// USING children PROPS
ReactDOM.render((
  <Layout>
   <div>
     <h1>Page Title</h1>
     <p>This is my Page</p>
   </div>
  </Layout>
  ), document.getElementById('root'))
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      input: "",
      decision: "",
      visibility: false,
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  // Fires after the Component first mounts
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      // To make sure we only call setState if
      // There are any options saved
      if (options) {
        this.setState(() => ({
          options: options,
        }));
      }
      // Similarly, here we make sure COUNT is a
      // number as opposed to any other symbol
      const count = parseInt(localStorage.getItem("count"), 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (error) {
      // Do nothing at all if JSON data is invalid
    }
  }
  // Fires after a prop or state change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  // Fires just before a Component goes away
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let option = this.state.input;
    // Insuring the input isn't empty
    // or repeating by validating below
    if (!option) {
      alert("Please enter a valid option");
      return;
    } else if (this.state.options.indexOf(option) > -1) {
      alert("This option already exists. Please enter a different option");
      return;
    }
    this.setState({
      options: this.state.options.concat(option),
      input: "",
    });
  }
  onMakeDecision() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let randomNum = getRandomInt(0, this.state.options.length);
    this.setState(() => {
      return {
        decision: this.state.options[randomNum],
      };
    });
  }
  removeOption(index) {
    const optionsCopy = this.state.options.slice();
    optionsCopy.splice(index, 1);
    // SHORT WAY OF USING ARROW SYNTAX
    // INSTEAD OF return and {}
    this.setState(() => ({ options: optionsCopy }));
  }

  handleRemoveAll() {
    const optionsCopy = this.state.options.slice();
    optionsCopy.splice(0, optionsCopy.length);
    this.setState(() => {
      return {
        options: optionsCopy,
      };
    });
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  handleIncrement() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  handleDecrement() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }
  handleClear() {
    this.setState(() => ({ decision: "" }));
  }
  render() {
    return (
      <div className="App">
        <button
          className="btn btn-toggler"
          type="button"
          onClick={this.handleToggle}
        >
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        <div>
          {this.state.visibility && (
            <Counter
              count={this.state.count}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
            />
          )}
        </div>
        <Header
          title="Indecision App"
          subtitle="Put your life in the hands of a computer"
        />
        <div className="container">
          <Action
            onMakeDecision={this.onMakeDecision}
            options={this.state.options}
            decision={this.state.decision}
          />
          <div className="widget">
            <RemoveAll handleRemoveAll={this.handleRemoveAll} />
            <Options
              options={this.state.options}
              removeOption={this.removeOption}
            />
            <AddOption
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              input={this.state.input}
            />
          </div>
          <h4>{this.state.decision}</h4>
        </div>
        <OptionModal
          decision={this.state.decision}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
