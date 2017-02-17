var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

var Preview = React.createClass({

    createMarkdown: function() {
        var markdown = marked(this.props.text);

        return {__html: markdown};
    },

    render: function() {
        var text = this.props.text;

        return <div dangerouslySetInnerHTML={this.createMarkdown()} />
    }
});

module.exports = Preview;
