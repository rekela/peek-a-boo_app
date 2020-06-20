import React, {useState, useEffect} from "react";
import Child from './Child';
import Header from "./Header";
import Footer from "./Footer";
import ChildrenListItem from "./ChildrenListItem";
import Login from "./Login";

const ChildrenList = () => {
    const [details, setDetails] = useState(null)
    const [children, setChildren] = useState([]);
    const url = 'http://127.0.0.1:8000/children-list/';
    useEffect(() => {
        fetch(url).then(response => {
            return response.json();
        }).then(obj => {
            setChildren(obj);
        })
    }, []);

    const renderChildrenList = () => {
        return (
            <>
                <div className={'main-view-container2'}>
                    <h1 className={'logo'}>Lista dzieci</h1>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lp</th>
                                    <th>Imię i nazwisko</th>
                                    <th>Grupa</th>
                                    <th>Szczegóły</th>
                                </tr>
                            </thead>
                            <tbody>
                                {children.map(child => <ChildrenListItem key={child.id} child={child} details={setDetails}/>)}
                            </tbody>
                        </table>
                        <button className={'btn-yellow' + ' ' + 'btn'}>Dodaj</button>
                        {/*<div>*/}
                        {/*        {children.map(child => <ChildrenListItem key={child.id} child={child} details={setDetails}/>)}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </>
        )
    }

    return details ? <Child child={details} setDetailsHandler={setDetails} /> : renderChildrenList();
};

export default ChildrenList;
