import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectList from '../../containers/ProjectList';
import ProjectSearch from '../../utils/ProjectSearch';
import { fetchAllProjects } from '../../actions';
import FilterProject from '../../utils/FilterProjects';
import {Container, Row, Col} from 'react-bootstrap'

class Projects extends Component {

  componentDidMount() {
    this.props.onMount()
  }


  render() {
    return (
      <Container>
            <ProjectSearch />
            <FilterProject />
            <ProjectList />
      </Container>
    );
  }
}



const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: id => {
      dispatch(fetchAllProjects())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
