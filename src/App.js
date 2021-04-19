import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 3000);
  }
  render() {
    const isLoading = this.state.isLoading;
    return <div>{isLoading ? '로딩' : '대기'}</div>;
  }
}

export default App;
