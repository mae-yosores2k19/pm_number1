import React, { Component } from 'react'
import WordCount from './WordCount';
// import 'semantic-ui-css/semantic.min.css'

class App extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <WordCount />
            </div>
        );
    };
}
export default App;