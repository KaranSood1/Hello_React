var React = require('react');
var GreeterMessage = require('./GreeterMessage.jsx');

var GreeterForm = require('./GreeterForm.jsx');


//component Main
var Greeter = React.createClass({
  getDefaultProps : function(){
    //default prop
    return{
      name: 'React',
      message: 'This is a default message'
    };
  },
  //Built in method of react.It returns an obj and that gets set ti 'This.state'
  //Sets its name state to props value
  getInitialState : function(){
    return{
      //name state
      name : this.props.name,
      message:this.props.message
    };
  },

  handleNewName: function(updates){
  this.setState(updates);
      },


  //render method which returns jsx code
  render: function(){
    //return jsx code to show in browser
    //Always return 1 root elemnt. Here it is 'div'
    //Multiple returns wont render on browser

 var name = this.state.name;
 var message = this.state.message;
    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});


module.exports = Greeter;
