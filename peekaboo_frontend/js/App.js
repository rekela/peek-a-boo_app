import React, {Component} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Calendar from "./Calendar";
import Kindergarten from "./Kindergarten";
import UsersList from "./UsersList";
import ChildrenList from "./ChildrenList";
import Footer from "./Footer";
import Child from "./Child";

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
//             <ChildrenList children={this.state.children} />
//         );
//     }
// }

const App = () => {
    return(
        <Calendar/>
    )
}

// const App = () => {
//     return(
//         <Login/>
//     )
// }

ReactDOM.render(<App />, document.getElementById("app"));