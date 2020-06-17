import React, {Component} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Calendar from "./Calendar";
import Kindergarten from "./Kindergarten";
import UsersList from "./UsersList";
import ChildrenList from "./ChildrenList";

// export class App extends Component {
//     state = {
//         children: []
//     };
//     componentDidMount() {
//         fetch("http://127.0.0.1:8000/children-list/")
//             .then(response => response.json())
//             .then(json => {
//                 this.setState(json)});
//         // console.log(this.state.children);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Lista dzieci</h1>
//                 <h3>{this.state.children[0]}</h3>
//                 {/*<ChildrenList children={this.state.children} />*/}
//             </div>
//
//         );
//     }
// }

const App = () => {
    return(
        <Calendar/>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));