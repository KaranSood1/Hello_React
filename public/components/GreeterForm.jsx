var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit : function (e){
    //this is gonna prevent browser from refreshing,
    //which is the default behaviour of browser
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0){
      this.refs.name.value= '';
      updates.name = name;

    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewName(updates);
  },
  render : function () {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='name' placeholder="Enter name"></input>
        <textarea ref="message" placeholder="Enter Message"></textarea>
        <button>Set name Nested</button>

      </form>

    );
  }

});

module.exports = GreeterForm;
