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
                <div style={{
                    backgroundColor: mainColor,
                    height: 70,
                    width: 500
                }}>
                    <img src={'./assets/logo.png'} />
                </div>

                <DayPicker
                    selectedDays={this.state.selectedDays}
                    onDayClick={this.handleDayClick}
                />
                <div style={{
                    backgroundColor: mainColor,
                    height: 40,
                    width: 500
                }}>
                    <span>Ilość wybranych dni: {this.state.selectedDays.length} </span>
                    <button onClick={this.handleClear}>Clear</button>
                </div>
                <div style={{
                    backgroundColor: mainColor,
                    height: 40,
                    width: 500
                }}>
                    <span>Zapisz nieobecność dla wskazanych dni </span>
                    <button>Save</button>
                </div>
            </>
        );
    }
}
