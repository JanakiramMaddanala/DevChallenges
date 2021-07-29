import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    return error ? { hasError: true } : null;
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch ");
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong....</div>;
    }

    return this.props.children;
  }
}
