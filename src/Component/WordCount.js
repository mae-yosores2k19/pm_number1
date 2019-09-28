import React, { Component } from 'react';


class WordCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: [],
            paragraph: "",
            needWord: "(empty)",
            count: 0,
            wordCount: 0,


        }
    }
    handlerCount = (e) => {
        const { paragraph, sentence, needWord } = this.state;
        e.preventDefault();
        sentence.push(paragraph);
        var words = sentence[Math.floor(Math.random() * sentence.length)];
        var sSplit = words.split(' ').filter(function (n) { return n !== '' })

        var counter = 0;
        this.setState({ wordCount: sSplit.length });
        for (var i = 0; i < sSplit.length; i++) {
            if (sSplit[i] === needWord) {
                counter += 1;
                console.log("test")
            }
        }
        this.setState({ count: counter });
    }
    render() {
        const { paragraph, needWord, count, wordCount } = this.state;
        return (

            <center>
                <br />
                <br />
                <div class="ui card raised">
                    <div class="content">
                        <div class="ui left icon input">
                            <input type="text" placeholder="Enter sentence" onChange={e => this.setState({ paragraph: e.target.value })}></input>
                            <i aria-hidden="true" class="pencil icon"></i>
                        </div>
                        <br />
                        <br />
                        <div class="ui left icon input">
                            <input type="text" placeholder="Enter Word" onChange={e => this.setState({ needWord: e.target.value })}></input>
                            <i aria-hidden="true" class="pencil icon"></i>
                        </div>
                        <br></br><br></br><br></br>
                        <div>
                        </div>
                        <button class="ui button basic green " onClick={(e) => this.handlerCount(e)}>Count </button><br></br><br></br>
                        <div>

                            <div style={{ textAlign: "left" }}>

                                <br />

                                <div class="ui horizontal small statistic" >
                                    <div class="value" onChange={e => this.setState({ paragraph: e.target.value })}>
                                    </div>paragraph : {paragraph}
                                </div>
                                <br />

                                <div class="ui horizontal small statistic" >
                                    <div class="value" onChange={e => this.setState({ paragraph: e.target.value })}>

                                    </div>Words in the input sentence: {wordCount}
                                </div>
                                <br />

                                <div class="ui horizontal small statistic" >
                                    <div class="value" ></div>{needWord}: {count}
                                </div>
                            </div>
                        </div>

                        <br></br>


                    </div>
                </div>

            </center>

        )
    }
}
export default WordCount;