import React, {ReactNode, Suspense} from 'react';
import {PageError} from "@widgets/PageError/ui/PageError";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Можно заменить на любую свою логику логирования
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Suspense fallback="">
                        <PageError/>
                   </Suspense>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
