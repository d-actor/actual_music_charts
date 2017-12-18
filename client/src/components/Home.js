import React, { Component } from 'react';
import {
  Segment,
  Container,
  List,
  Header,
  Button,
  Table
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharts } from '../actions/charts';
import axios from 'axios';

class Home extends Component {
  state = { charts: [] }

  componentDidMount() {
    this.props.dispatch(getCharts())
    axios.get('/api/charts')
    .then( res => {
      this.setState({ charts: res.data })
    })
    .catch( err => {
      console.log(err);
    });
  }

  deleteChart = (id) => {
    const { charts } = this.state;
    this.setState({ charts: charts.filter( c => c.id !== id) })
  }

  displayChart = () => {
    return this.state.charts.map( chart => {
      return(
        <List>
          <h1 color='white'>
          <Link to={`/charts/${chart.id}`}>{chart.name}</Link>
          </h1>
        </List>
      )
    })
  }

  render() {
    return (
      <Segment inverted>
        <Container>
          <h1 color='white'>Sickest Charts</h1>
          <Button>
            <Link to='/chartform'>
              <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Create New Chart</div>
                <div class="hidden content">
                  Aren't you cool
                </div>
              </div>
            </Link>
          </Button>
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Chart</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.displayChart()}
          </Table>
        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {charts: state.charts }
}

export default connect(mapStateToProps)(Home);
