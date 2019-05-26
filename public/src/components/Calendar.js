import React from "react";
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

class Calendar extends React.Component {
    render() {
        return (
            <div className="calendar-wrapper">
                <LeftSide/>
                <RightSide/>
            </div>
        )
    }
}
export default Calendar;