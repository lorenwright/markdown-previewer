var React = require('react');
var ReactDOM = require('react-dom');

var styles = {
    width: '90%',
    height: 200
};

var Input = React.createClass({

    handleChange: function(event) {

        var text = event.target.value;
        this.props.onChange(text);
    },

    render: function() {
        return (
            <form>
                <textarea style={styles} value={this.props.text} onChange={this.handleChange} />
            </form>
        );
    }
});

module.exports = Input;
