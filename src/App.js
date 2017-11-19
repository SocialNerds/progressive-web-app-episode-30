import React, { Component } from 'react';

const API_KEY = 'API_KEY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentWillMount = () => {
     this.loadStarWars();
  }

  loadStarWars = (page = 1) => {
    fetch(`http://www.omdbapi.com/?s=star%20wars&page=${page}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({movies: json.Search}))
  }

  renderMovies = () => {
    return this.state.movies.map(item => {
      return <li key={item.imdbID}>
        <h3>{item.Title}</h3>
        <img src={item.Poster}/>
      </li>
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="images/logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="App-intro">
          {this.renderMovies()}
        </ul>
        <a href='#' onClick={(e) => {e.preventDefault(); this.loadStarWars(1)}}>Page 1</a>
        <a href='#' onClick={(e) => {e.preventDefault(); this.loadStarWars(2)}}>Page 2</a>
        <a href='#' onClick={(e) => {e.preventDefault(); this.loadStarWars(3)}}>Page 3</a>
      </div>
    );
  }
}

export default App;
