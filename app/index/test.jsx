'use strict';

let React = require('react');

let Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<Hello name="World" />, document.getElementById('example'));

export default Hello;