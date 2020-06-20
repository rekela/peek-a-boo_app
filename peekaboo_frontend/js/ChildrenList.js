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
                    <div className={'main-view2'}>
                        <div>
                            <ul className={'item'}>
                                {children.map(child => <ChildrenListItem key={child.id} child={child} details={setDetails}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return details ? <Child child={details} setDetailsHandler={setDetails} /> : renderChildrenList();
};

export default ChildrenList;
