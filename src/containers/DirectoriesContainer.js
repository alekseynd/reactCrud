import { connect } from 'react-redux'
import { getDirectories } from '../actions/DirectoriesAction';


import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import DirectoriesList from '../components/pages/directories_list/DirectoriesList';

class DirectoriesListContainer extends Component {

    render() {
        return (
            < DirectoriesList directories={this.prop.directories} getDirectories={this.props.getDirectories}/>
        )
    }
}




const mapStateToProps = (state) => {
return {
    directories: state.directoriesReducer
}
};


function mapDispatchToProps(dispatch) {
    return {
        getDirectories: bindActionCreators({
            getDirectories: getDirectories, }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DirectoriesListContainer);
