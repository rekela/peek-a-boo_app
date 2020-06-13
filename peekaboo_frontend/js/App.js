import React, {Component} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Calendar from "./Calendar";
import UsersList from "./UsersList";
import ChildrenList from "./ChildrenList";

export class App extends Component {
    state = {
        children: []
    };
    componentDidMount() {
        fetch("http://127.0.0.1:8000/children-list/")
            .then(res => res.json())
            .then(json => this.setState({ children: json.results }));
    }

    render() {
        // console.log(this.state.users);
        return (
            <div>
                <main className="form-container">
                    <ChildrenList children={this.state.children} />
                </main>
            </div>

        );
    }
}
// const App = () => {
//     return <Users/>
// }

ReactDOM.render(<App />, document.getElementById("app"));