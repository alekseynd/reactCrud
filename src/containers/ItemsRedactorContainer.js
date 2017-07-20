import { connect } from 'react-redux'
import { getDirectories } from '../actions/DirectoriesAction';
import { getItem } from '../actions/ItemActions';


import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import ItemRedactor from '../components/pages/item_types__redactor/ItemRedactor';

class ItemsRedactorContainer extends Component {
    componentDidMount() {
        this.props.ItemAction.getItem(this.props.params.id)
    }
    render() {
        return (
            < ItemRedactor item_to_redact={this.props.item_to_redact}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item_to_redact: state.itemsDirecotoryReducer.redactedError
    }
};


function mapDispatchToProps(dispatch) {
    return {
        ItemAction: bindActionCreators({
            getItem: getItem}, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(ItemsRedactorContainer);


