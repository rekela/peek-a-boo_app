import React, {Component} from "react";
import DayPicker, { DateUtils } from 'react-day-picker';
import "react-day-picker/lib/style.css";

const mainColor = 'rgb(255,207,65)';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDays: [],
        };
    }

    handleDayClick(day, { selected }) {
        const { selectedDays } = this.state;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.setState({ selectedDays });
    }

    handleClear = () => {
        const clearSelectedDays = [];
        this.setState(() => {
            return {
                selectedDays: clearSelectedDays
            }
        });
    }

    render() {
        return (
            <>
                <header>
                    <div className="container page-header">
                        <div>
                            <img src="./assets/logo.png" alt="Logo"/>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Przedszkole</a>
                                </li>
                                <li>
                                    <a href="#">Dzieci</a>
                                </li>
                                <li>
                                    <a href="#">Obecność</a>
                                </li>
                                <li>
                                    <a href="#">Wydarzenia</a>
                                </li>
                                <li>
                                    <a href="#">Opłaty</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {/*<div className={'title-container'}>*/}
                {/*    <img src={'./assets/logo.png'} />*/}
                {/*</div>*/}
                <div className={'main-view-container'}>
                    <h1 className={'logo'}>Obecność</h1>
                    <div className={'main-view'}>
                        <div className={'day-picker-container'}>
                            <DayPicker
                                selectedDays={this.state.selectedDays}
                                onDayClick={this.handleDayClick}
                            />
                        </div>
                    </div>
                </div>
                <div className={'form-container'}>
                    <div className={'form-container-content'}>
                        <div>Ilość wybranych dni: <strong> {this.state.selectedDays.length} </strong></div>
                        <div>Chcesz zapisać nieobecność dla wskazanych dni?</div>
                        <button className={'btn'} onClick={this.handleClear}>Clear</button>
                        <button className={'btn'}>Save</button>
                    </div>
                </div>
            </>
        );
    }
}
