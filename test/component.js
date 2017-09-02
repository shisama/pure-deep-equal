const React = require("react");
const PureDeepEqual = require("../index");

@PureDeepEqual
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div onClick={this.props.onClick}>{this.props}</div>
    )
  }
}

export default Test;