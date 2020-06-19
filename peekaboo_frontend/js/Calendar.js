import React, {Component} from "react";
import DayPicker, { DateUtils } from 'react-day-picker';
import "react-day-picker/lib/style.css";
import Header from "./Header";
import Footer from "./Footer";

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
               <Header/>

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
                <div className={'second-section'}>
                    <div className={'second-section-content'}>
                        <div>Ilość wybranych dni: <strong> {this.state.selectedDays.length} </strong></div>
                        <div>Chcesz zapisać nieobecność dla wskazanych dni?</div>
                        <button className={'btn'} onClick={this.handleClear}>Clear</button>
                        <button className={'btn'}>Save</button>
                    </div>
                </div>

                <Footer/>
            </>
        );
    }
}
