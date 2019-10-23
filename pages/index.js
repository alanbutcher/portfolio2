import React from 'react'
import BaseLayout from '../components/layouts/baseLayout'
const axios = require('axios');

class Home extends React.Component {

  static async getInitialProps() {
    let userData = {}
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      userData = response.data
    } catch (err) {
      console.error(err)
      
    }

    return{initialData: [1,2,3,4], userData}
  }

  constructor(props) {
    super(props)
  
    this.state = {
      title: 'I am a title page'
    }
  }

    componentDidMount() {

    }
  
  updateTitle() {
    this.setState({title: 'new title!'})
  }

  render() {
    const { title } = this.state
    const { userData, initialData } = this.props;
      return (
        <BaseLayout>
          <h1>I am the Home page</h1>
          <h2>{title}</h2>
          <h2>{userData.title}</h2>
          <button onClick={this.state.updateTitle}>Change Title</button>
        </BaseLayout>

      )
    }
  }

  
    
    export default Home
