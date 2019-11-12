import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/baseLayout';

import { Button, Container, Row, Col } from 'reactstrap';


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Full Stack Developer', 'JavaScript, React, Vue', 'Node, Express, MongoDB', 'Masters of Business Administration', 'Agile Methodology', 'SCRUM', 'Product Development']
  }

  componentDidMount() {
    this.animateCard()
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval)
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      })
    }, 5000)
  }


  render() {
    const { isAuthenticated, user } = this.props.auth
  const { isFlipping } = this.state

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} headerType="index">
      <div className="main-section">
        <div className="background-image">
          <img src="/static/images/background-index.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Tech lover - Self taught developer
                </div>
                    </div>
                    <img className="image" src="/static/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> MBA Student at BSU</h2>
                        <div className="hero-section-content-intro">
                          3.9 GPA - Graduating Spring 2020
                </div>
                      </div>
                      <img className="image" src="/static/images/section-2.png" />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                   
                </div>
              </div>
            </Col>
          <Col md="6" className="hero-welcome-wrapper">
        <div className="hero-welcome-text">
        <h1>
          {/* {isAuthenticated && <span> {user.name} </span> }   */}
          Welcome to the portfolio website of Alan Butcher.
          Get to know me and some projects I have been working on as a self taught developer!
        </h1>
        </div>
        <div>
          <Typed
            loop
            typeSpeed={40}
            backSpeed={30}
            strings={this.roles}
          backDelay={1500}
          loopCount={0}
            showCursor
          className="self-typed"  
          cursorChar="|"
        />
        </div>  
        <div className="hero-welcome-bio">
          <h1>
            Let's take a look at my work.
          </h1>
        </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
    )
  }
  }

  export default Home
