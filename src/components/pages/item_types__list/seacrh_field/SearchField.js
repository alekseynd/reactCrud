import React, { Component } from 'react';
import './SearchField__style.css';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


import { searchDirectory, getErrorDirectory } from '../../../../actions/ItemActions';

class SearchField extends Component {
    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }

    sendData(event) {
            console.log('as', event.target.value);
            this.props.getErrorsList.searchDirectory(event.target.value)
    }


    render() {
        return (
            <div className="error_types_list__search_wrapper">
                <p>Фильтр</p>
                <input type="text" placeholder="Поиск" onChange={this.sendData}/>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getErrorsList: bindActionCreators({
            searchDirectory: searchDirectory}, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(SearchField);
