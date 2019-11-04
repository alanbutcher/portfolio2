import React from 'react';
import BaseLayout from '../components/layouts/baseLayout';
import BasePage from '../components/BasePage';



class About extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page" title="I am the about page">
      </BasePage> 
      </BaseLayout> 
    )
  }
}

export default About