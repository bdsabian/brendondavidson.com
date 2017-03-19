import { Component, PropTypes } from "react";

export default class Timer extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    delay: PropTypes.number.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.delay !== this.props.delay ||
      nextProps.callback !== this.props.callback
    ) {
      this.stop();
      if (nextProps.delay && nextProps.callback) {
        this.startTimer(nextProps.delay, nextProps.callback);
      }
    }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  shouldComponentUpdate() {
    return false;
  }

  startTimer(delay, callback) {
    if (!this._timer) this._timer = setInterval(callback.bind(this), delay);
  }

  start() {
    this.startTimer(this.props.delay, this.props.callback);
  }

  stop() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  render() {
    return null;
  }
}
