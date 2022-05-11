import React, { memo } from 'react';

interface LoaderProps {
    isLoading:boolean,
    content:any
}

const LoaderComponent: React.FC<LoaderProps> = memo(({ isLoading = false, content }) =>
    isLoading ? (
        <div id="preloader">
            <div id="loader">
                {content.loadingText}
                <div className="spin" />
            </div>
        </div>
    ) : null
);

export { LoaderComponent };
