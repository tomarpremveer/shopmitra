import  React  from "react";
import GoogleAuth from './GoogleAuth';
class App extends React.Component {
    render(){
        return (
            <div className="ui container">
                <GoogleAuth />
            </div>
        )
    }
}

export default App;
