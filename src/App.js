import React from 'react';
import { Component } from 'react';


class App extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;

// function mapDispatchToProps(dispatch) {
//     return {
//         initiasState: bindActionCreators({
//             getInitialState: getInitialState}, dispatch)
//     };
// }
//
//
// export default connect(
//     null,
//     mapDispatchToProps
// )(App);


// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
//
// import ItemRedactor from '../components/pages/item_types__redactor/ItemRedactor';
//
// class ItemsRedactorContainer extends Component {
//     componentDidMount() {
//         this.props.ItemAction.getItem(this.props.params.id)
//     }
//     render() {
//         return (
//             < ItemRedactor item_to_redact={this.props.item_to_redact}/>
//         )
//     }
// }
//
//
//
//
// function mapDispatchToProps(dispatch) {
//     return {
//         ItemAction: bindActionCreators({
//             getItem: getItem}, dispatch)
//     };
// }
//
// export default connect(
//     null,
//     mapDispatchToProps
// )(ItemsRedactorContainer);