declare module 'react-fullscreen-loading' {
    import * as React from 'react';

    interface LoadingProps {
        loading: boolean;
        background?: string;
        loaderColor?: string;
    }

    const Loading: React.FC<LoadingProps>;
    export default Loading;
}