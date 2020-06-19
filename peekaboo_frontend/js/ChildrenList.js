import React, {useState} from "react";
import Child from './Child';
import Header from "./Header";
import Footer from "./Footer";
import ChildrenListItem from "./ChildrenListItem";

const ChildrenList = () => {
    const [children, setChildren] = useState([]);
    const url = 'http://127.0.0.1:8000/children-list/';
    fetch(url).then(response => {
        return response.json();
    }).then(obj => {
        setChildren(obj);
    })
    return (
        <>
            <Header/>

            <div className={'main-view-container'}>
                <h1 className={'logo'}>Lista dzieci</h1>
                <div className={'main-view'}>
                    <div>
                        <ul>
                            {children.map(child => <ChildrenListItem key={child.id} child={child} />)}
                        </ul>
                    </div>
                </div>
            </div>
            {/*{children.map(child => <Child key={child.id} child={child}/>)}/>*/}
            <Footer/>
        </>
    )
};

export default ChildrenList;
