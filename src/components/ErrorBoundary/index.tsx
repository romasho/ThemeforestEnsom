import { Component, ErrorInfo, ReactNode } from 'react';

import { PageLayout } from '@/layouts/Pages';
import { Headline } from '@/components/Headline';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: ErrorInfo | null;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: null,
    error: null,
  };

  public static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo): State {
    return { hasError: true, errorInfo, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  goBack() {
    this.setState({ hasError: false });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <PageLayout>
          <Headline size="h2">{(this.state.error as Error).toString()}</Headline>
        </PageLayout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
