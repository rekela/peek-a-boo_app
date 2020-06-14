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
            .then(response => response.json())
            .then(json => this.setState({ children: json.results }));
        console.log(this.state.children);
    }
    render() {
        return (
            <div>
                <ChildrenList children={this.state.children} />
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));