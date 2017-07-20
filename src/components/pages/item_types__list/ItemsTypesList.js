import React, { Component } from 'react';
import './ItemsTypesList.js__style.css';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';

import SearchField from './seacrh_field/SearchField';

import { getItemsDirectoryList, searchErrorDirectory } from '../../../actions/ItemActions';


import { connect } from 'react-redux'

class ItemsTypesList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getData = this.getData.bind(this);
    }

    getData() {
        this.props.getItemsList.getItemsDirectoryList();
    }

    componentDidMount() {
        this.getData();
    }
    render () {

        let tbody = '';
        let thead = '';
        if (this.props.items_list.searcedItems !== undefined && this.props.items_list.searcedItems.length ) {
            this.tbody = this.props.items_list.searcedItems.map(function (searchedItem) {
                return (
                    <tr key={searchedItem.id}>
                        <td className="items_list__link"><Link to={`/itemredactor/${searchedItem.id}`} >{searchedItem.name}</Link></td>
                        <td>{searchedItem.weight}</td>
                        <td>{searchedItem.point}</td>
                        <td>{searchedItem.endDate}</td>
                    </tr>
                )
            });
        }
        if (this.props.items_list.fields !== undefined && this.props.items_list.fields.length ) {
            this.thead = this.props.items_list.fields.map(function (field) {
                return (
                    <th>{field.name}</th>
                )
            });
        }

        return (
            <div className="main_wrapper">
                <nav>
                    <Link to="/" className="nav__bread_crumd">Справочники</Link> <span className="naw__arrow">→</span>
                </nav>
                <h2 className="error_types__header">{this.props.items_list.name}</h2>
                <div className="error_types_list__wrapper">

                    <Link to="/itemredactor/" className="error_types_list__button">
                        <span className="button__add_sign">+</span> <span className="button__name">Создать новый</span>
                    </Link>
                    <SearchField/>
                    <div className="error_types_list__table_wrapper">
                        <table className="error_types_list__table" border="0">
                            <thead>
                            <tr>
                                {this.thead}
                            </tr>
                            </thead>
                            <tbody>
                            {this.tbody}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        items_list: state.itemsDirecotoryReducer
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getItemsList: bindActionCreators({
            getItemsDirectoryList: getItemsDirectoryList}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsTypesList);

