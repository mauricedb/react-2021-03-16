import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errinfo) {
    console.log(error);
    console.log(errinfo);
  }

  render() {
    if (this.state.error) {
      return React.cloneElement(this.props.errorComponent, {
        error: this.state.error,
      });
      //   return 'There was some error: ' + this.state.error.message;
      //   return (
      //     <div>
      //       <h2 style={{ color: 'red' }}>{this.state.error.message}</h2>
      //       {this.props.children}
      //     </div>
      //   );
    }

    return this.props.children(this.state.error);
  }
}
