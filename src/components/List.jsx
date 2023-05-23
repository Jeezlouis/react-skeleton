var React = require{'react'};
var Listitem = require('./Listitem.jsx');

var ingredent = [{"id":1, "text":"ham"}, {"id":2, "text":"Cheeese"}, {"id:3,"text":"potatoes"}];

var List = React.createClass({
    render: function() {
        var Listitems = ingredents.map(funtion(item) {
            return <Listitem key={item.id} ingriedent={item.text} />;
        } );
        return (<ul>{Listitems}</ul>);
    }
});
module.exports = List;