import React from "react";

class LeftSide extends React.Component {
    render() {
        return (
            <div className="left-side-wrapper">
                <div className="first block">
                    <p className="time event">8:00 <p className="exercise event">Exercise</p></p>
                    <p className="time small">8:30 <p className="plan-day event">Plan day</p><p className="travel event">Travel to...</p></p>
                </div>
                <div className="second block">
                    <p className="time event">9:00 <p className="review event">Review yesterday's commits</p></p>
                    <p className="time small">9:30 <p className="code-review event">Code review</p></p>
                </div>
                <div className="third block">
                    <p className="time ten event">10:00</p>
                    <p className="time ten-small small">10:30</p>
                </div>
                <div className="fourth block">
                    <p className="time eleven event">11:00 <p className="lunch event">Have lunch with John</p></p>
                    <p className="time eleven-small small">11:30</p>
                </div>
                <div className="fifth block">
                    <p className="time twelve event">12:00</p>
                    <p className="time twelve-small small">12:30</p>
                </div>
            </div>
        )
    }
}
export default LeftSide;