import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Child = ({child, setDetailsHandler}) => {
    return (
        <>
            <div className={'main-view-container2'}>
                <h1 className={'logo'}>Dane dziecka</h1>
                <div className={'main-view3'}>
                    <h1>{child.first_name} {child.last_name}</h1>
                    <h4>Grupa: {child.team_name}</h4>
                    <table className={'table-yellow'}>
                        <thead>
                            <tr>
                                <td>Data urodzenia</td>
                                <td>{child.date_of_birth}</td>
                            </tr>
                            <tr>
                                <td>Pesel</td>
                                <td>{child.pesel}</td>
                            </tr>
                            <tr>
                                <td>Dieta</td>
                                <td>{child.diet}</td>
                            </tr>
                            <tr>
                                <td>Godzina przyjścia</td>
                                <td>{child.start_hour}</td>
                            </tr>
                            <tr>
                                <td>Godzina wyjścia</td>
                                <td>{child.end_hour}</td>
                            </tr>
                            <tr>
                                <td>Rodzic</td>
                                <td>{child.parent}</td>
                            </tr>
                            <tr>
                                <td>Karta Dużej Rodziny</td>
                                <td>{child.kdr}</td>
                            </tr>
                            <tr>
                                <td>Dodatkowe informacje</td>
                                <td>{child.additional_info}</td>
                            </tr>
                        </thead>
                    </table>
                    <button className={'btn'} onClick={()=> setDetailsHandler(null)}>Zamknij</button>
                </div>
            </div>

        </>
    );
};

export default Child