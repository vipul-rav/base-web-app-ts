import React, { Component, ErrorInfo } from "react";

  
  interface State {
    hasError: boolean;
  }
  
  class ErrorComponent extends Component<any, State> {
  
    public state: State = {
        hasError: false
      };
    
      public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
      }
    render() {
        const { content } = this.props;
        if (this.state.hasError) {
            return (
                <div>
                    <h1>{content.errorHeader}</h1>
                    <div>
                        <p> {content.errorText} </p>
                    </div>
                    <div>
                        <button>{content.ExitText}</button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export { ErrorComponent };
 
