var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('./components/Greeter.jsx');



var man = {
  name:'Admi',
  umar:'pachchees',
  balance:'20 rupiya',
};

var womaaaaaan = {
    naam : ' Nacheez aurat ',
    umar : '16 Baras',

};

ReactDOM.render(
    //1st is the tag you want to render

    //props 'name' is used for giving name to component
    //it gets added like a property in an html tag
    <Greeter name="Karan" />,
    //2nd is where you wanna render
    document.getElementById('app')
)
