import React, { Component } from 'react';
import {
  Header,
  Image,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Noth04 from '../images/404.jpg';

class NoMatch extends Component {
  render() {
    return (
      <Segment inverted>
        <Header as='h1' textAlign='center'>
          404
        </Header>
        <br />
        <Image centered src={Noth04} />
        <Header textAlign='center' as='h3'>
          Nothing here but Nothing.
          <br />
          <Link to='/'>
           Go Home
          </Link>
        </Header>
      </Segment>
    );
  }
}

export default NoMatch;
