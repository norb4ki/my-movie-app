import React, { memo, Suspense } from 'react';

const LoadComponent = (Component) => {
    const WrappedComponent = memo((props) => (
        <Suspense fallback={<div />}>
            <Component {...props} />
        </Suspense>
    ));

    WrappedComponent.displayName = `LoadComponent(${Component.displayName || Component.name || 'Component'})`;

    return WrappedComponent;
};

export default LoadComponent;
