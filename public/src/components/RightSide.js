import React from "react";

class RightSide extends React.Component {
    render() {
        return (
            <div className="right-side-wrapper">
                <div className="six block">
                    <p className="time event">1:00</p>
                    <p className="time small">1:30</p>
                </div>
                <div className="seventh block">
                    <p className="time event">2:00</p>
                    <p className="time small">2:30 <p className="follow event">Follow up..</p>
                    <p className="skype event">Skype call</p></p>
                </div>
                <div className="eighth block">
                    <p className="time event">3:00<p className="push event">Push up..</p></p>
                    <p className="time three-small small">3:30</p>
                </div>
                <div className="ninth block">
                    <p className="time event">4:00</p>
                    <p className="time four-small small">4:30</p>
                </div>
                <div className="tenth block">
                    <p className="time event">5:00</p>
                </div>
            </div>
        )
    }
}
export default RightSide;