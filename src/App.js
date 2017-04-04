import React, { Comp } from './rereact';
import logo from './logo.svg';
import './App.css';


class App extends Comp {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ this.props.title }</h2>
        </div>
        <p className="App-intro">
          Count: <span>{ this.state.count }</span>
        </p>
        <ColourSwatch number={ this.state.count } />
      </div>
    );
  }
}

class ColourSwatch extends Comp {
  render() {
    const red = this.props.number % 256;
    return (
      <div
        style={{
          backgroundColor: `rgb(${red}, 0, 0)`,
          height: '50px',
          width: '50px',
          margin: 'auto'
        }}
      />
    );
  }
}

export default App;
