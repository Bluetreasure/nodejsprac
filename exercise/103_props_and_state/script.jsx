var Counter = React.createClass({
  getDefaultProps: function() {
    return {title: "預設標題" ,
            start: "0"
    };
  },
  getInitialState: function() {
    return {count: parseInt(this.props.start,10)};
  },
  addCount:function(){
    //code here...
    this.setState({
      count:this.state.count+10
    });

  },
  render:function(){
    return (
      <div className="counter">
        <div className='title'>{/*code here...*/this.props.title}</div>
        <div className='count'>{/*code here...*/this.state.count}</div>
        <button onClick={this.addCount}>+1</button>
      </div>
    );
  }
});
ReactDOM.render(
  <Counter/>,
  document.getElementById('example1')
);
ReactDOM.render(
  <Counter title="計數器" start="100"/>,
  document.getElementById('example2')
);
