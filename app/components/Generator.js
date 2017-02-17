var React = require('react');
var ReactDOM = require('react-dom');
var Preview = require('./Preview');
var Input = require('./Input');

var Generator = React.createClass({
    getInitialState: function() {
        return {
            text: 'Enter your markdown here'
        }
    },

    changeText: function(newText) {
        this.setState({
            text: newText
        });
    },

    render: function() {
        return (
            <div>
                <Input onChange={this.changeText} text={this.state.text}/>
                <h1>Preview</h1>
                <Preview text={this.state.text} />
            </div>
        );
    }
});

module.exports = Generator;
