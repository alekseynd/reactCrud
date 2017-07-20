import React, { Component } from 'react';
import styles from './ItemRedactor.css';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import {bindActionCreators} from 'redux';

import { saveItem, deleteItem } from '../../../actions/ItemActions';

class ItemRedactor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            weight: '',
            point: '',
            endDate: '',
            text: '',
            units: '',
            id: ''

        };
        this.nameHandler = this.nameHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);
        this.pointHandler = this.pointHandler.bind(this);
        this.endDatetHandler = this.endDatetHandler.bind(this);
        this.textHandler = this.textHandler.bind(this);
        this.unitsHandler = this.unitsHandler.bind(this);

        //controls
        this.cancelChanges  = this.cancelChanges.bind(this);
        this.saveChanges    = this.saveChanges.bind(this);
        this.deleteItem    = this.deleteItem.bind(this);
    }
    nameHandler (ev) {
        this.setState({name: ev.target.value});
    }
    weightHandler (ev) {
        if (ev.target.value % 1 === 0)
        this.setState({weight: ev.target.value});

    }
    pointHandler (ev) {
        if (ev.target.value % 1 !== 0){
            this.setState({point: ev.target.value});
        }
        else {
            this.setState({point: 0});
        }

    }
    textHandler (ev) {
        this.setState({text: ev.target.value});
    }
    endDatetHandler (ev) {
        this.setState({endDate: ev.target.value.split('.').reverse().join('-')});
    }
    unitsHandler (ev) {
        this.setState({units: ev.target.value});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps['item_to_redact'] !== undefined) {
            this.setState({id: nextProps['item_to_redact']['id']});
            this.setState({name: nextProps['item_to_redact']['name']});
            this.setState({weight: nextProps['item_to_redact']['weight']});
            this.setState({point: nextProps['item_to_redact']['point']});
            this.setState({endDate: nextProps['item_to_redact']['endDate'].split('.').reverse().join('-')});
            if(nextProps['item_to_redact']['text']) {
                this.setState({text: nextProps['item_to_redact']['text']});
            }

            if (nextProps['item_to_redact']['units']) {
                this.setState({units: nextProps['item_to_redact']['units']});
            }


        }
    }

    componentDidMount() {

    }

    saveChanges() {
        this.props.ItemReadctorAction.saveItem(
            this.state.name,
            this.state.weight,
            this.state.point,
            this.state.endDate,
            this.state.text,
            this.state.units,
            this.state.id
        );
        alert('Изменения сохранены')
    }

    deleteItem() {
        if(this.state.id) {
            this.props.ItemReadctorAction.deleteItem(this.state.id);
            this.setState({name: ''});
            this.setState({weight: ''});
            this.setState({point: ''});
            this.setState({endDate: ''});
            this.setState({units: ''});
            this.setState({text: ''});
            this.setState({units: ''});
            alert('Удаление успешно');
        }


    }

    cancelChanges() {
        if(this.props.item_to_redact !== undefined) {
            this.setState({name: this.props.item_to_redact['name']});
            this.setState({weight: this.props.item_to_redact['weight']});
            this.setState({point: this.props.item_to_redact['point']});
            this.setState({endDate: this.props.item_to_redact['endDate'].split('.').reverse().join('-')});
            if(this.props.item_to_redact['text']) {
                this.setState({text: this.props.item_to_redact['text']});
            }
            else {
                this.setState({text: ''});
            }

            if (this.props.item_to_redact['units']) {
                this.setState({units: this.props.item_to_redact['units']});
            }
            else {
                this.setState({units: ''});
            }
        }
        else {
            this.setState({name: ''});
            this.setState({weight: ''});
            this.setState({point: ''});
            this.setState({endDate: ''});
            this.setState({units: ''});
            this.setState({text: ''});
            this.setState({units: ''});
        }
    }

    render() {
        return (
            <div className="main_wrapper">
                <nav>
                    <Link to="/" className="nav__bread_crumd">Справочники</Link> <span className="naw__arrow">→</span> <Link to="/directory/1" className="nav__bread_crumd">Типы ошибок</Link> <span className="naw__arrow">→</span>
                </nav>
                <h2 className="error_types__header">Грамматическая ошибка</h2>
                <div className="error_types_wrapper">
                    <form className="error_types__form">
                        <div className="error_types__input_field_wrapper">
                            <p>Наименование</p>
                            <input type="text" name="name" onChange={this.nameHandler}  value={this.state.name} placeholder="Грамматическая ошибка"/>
                        </div>

                        <div className="error_types__input_field_wrapper">
                            <p>Тяжесть</p>
                            <input type="text" name="weight" value={this.state.weight} onChange={this.weightHandler} placeholder="1"/>
                        </div>

                        <div className="error_types__input_field_wrapper">
                            <p>Балл</p>
                            <input type="text" name="point" value={this.state.point} onChange={this.pointHandler} placeholder="0.25"/>
                        </div>

                        <div className="error_types__input_field_wrapper">
                            <p>Действует до</p>
                            <input type="date" name="endDate" value={this.state.endDate}  onChange={this.endDatetHandler} placeholder="Грамматическая ошибка"/>
                        </div>

                        <div className="error_types__input_field_wrapper">
                            <p>Описание</p>
                            <textarea rows="10" type="text" name="describe" value={this.state.text} onChange={this.textHandler} placeholder="Грамматическая ошибка"/>
                        </div>

                        <div className="error_types__input_field_wrapper">
                            <p>Единицы измерения</p>
                            <select name="units" onChange={this.unitsHandler}  value={this.state.units}  placeholder="Грамматическая ошибка">
                                <option checked value="1">Баллы</option>
                                <option value="2">Минуты</option>
                                <option value="3">Часы</option>
                            </select>
                        </div>

                        <div className="error_types__controls_panel">
                            <div className="error_types__controls_panel___button" onClick={this.saveChanges}>Сохранить</div>
                            <div className="error_types__controls_panel___button" onClick={this.cancelChanges}>Отменить изменения</div>
                            <div className="error_types__controls_panel___button" onClick={this.deleteItem}>Удалить</div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return {
        item_to_redact: state.itemsDirecotoryReducer.redactedItem
    }
};

function mapDispatchToProps(dispatch) {
    return {
        ItemReadctorAction: bindActionCreators({
            saveItem: saveItem, deleteItem: deleteItem }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemRedactor);