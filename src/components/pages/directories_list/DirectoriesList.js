import React, { Component } from 'react';
import './DirectoriesList__style.css';
import Directory from './directory/Directory';

import { bindActionCreators } from 'redux';
import { getDirectories } from '../../../actions/DirectoriesAction';
import { connect } from 'react-redux'

const DirectoriesList = (props) => {
   let template = '';
   if (props.directories.length && props.directories !== undefined) {
       template = props.directories.map(function (directory) {
           return (
               <Directory directory={directory}/>
           )
       })
   }
   else {
       template = <p>Ничего не найдено</p>;
   }
    return (
        <div className="main_wrapper">
            <h2>Справочники</h2>
            <div className="directories_wrapper">
                {template}
            </div>

        </div>
    );
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
)(DirectoriesList);
