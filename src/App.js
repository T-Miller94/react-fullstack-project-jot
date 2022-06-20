import React from 'react';
import './App.css';
import Home from './components/Home';
import Thread from './components/Thread';


export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      genres: ['Fantasy', 'Sci-Fi','Journal'],
      currentThread: null,
      url: 'http://localhost:3333/posts/'
    }
  }

  render() {
    const goToThread = (thread) => {
      this.setState({currentThread: thread})
    }
  
    const goToHome = () => {
      this.setState({currentThread: null})
    }

    return(
      this.state.currentThread ?
        <Thread
          goToHome={goToHome}
          className="thread"
          thread={this.state.currentThread}
          url={this.state.url} />
        :
        <Home
          goToHome={goToHome}
          goToThread={goToThread}
          className="home"
          genres={this.state.genres} />
    )
  }
}


//todo: put event listeners on genres: sends to threads page.
//    titleCard to home page