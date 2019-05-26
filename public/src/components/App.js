import React from "react"
import Calendar from "./Calendar"

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="app-main-container">
                <Calendar/>
            </div>
        )
    }
}
export default App;