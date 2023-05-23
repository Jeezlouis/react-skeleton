var React = require('react');
var Listitem = React.createClass({
    render: function(){
        return (
            <li>
                <h4>(this.props.ingredent)</h4>
            </li>
        );
    }
});

module.export = Listitem;