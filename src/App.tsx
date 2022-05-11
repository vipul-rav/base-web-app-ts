import React, { memo } from 'react';
import { AppRouter } from './routes';
import { connect } from 'react-redux';
import { LoaderComponent } from './components/Loader';
import { HeaderComponent } from './components/Header';
import { ErrorComponent } from './components/Error';
import { withContent } from './hocs/withContent';


const AppComponent:React.FC<any> = memo(({ loader, content, error })=> {
    return (
        <div>
            <HeaderComponent />
            <div>
                <ErrorComponent hasError={error.showError} content={content}>
                    <AppRouter />
                    <LoaderComponent isLoading={loader.loading} content={content} />
                </ErrorComponent>
            </div>
        </div>
    );
});

const mapStateToProps = (state:any) => ({
    loader: state.loader,
    error: state.error
});


const App = withContent(connect(mapStateToProps)(AppComponent));

export { App };
