//code here...
var MyComponent = React.createClass({
  render:function(){
    return (
      <div className="my-component">
        This is a Component!
        <br/>
        <h1><a href="http://www.google.com">Google</a></h1>

      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('example')
);
