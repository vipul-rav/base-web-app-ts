import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RootAppState } from '../redux/store';

const mapStateToProps = (state:RootAppState) => ({
    content: state.config.externalContent
});

const withContent = (WrappedComponent:React.FC<any>) => {
    const WithContent = ({ ...props }) => {
        return <WrappedComponent {...props} />;
    };

    WithContent.propTypes = {
        id: PropTypes.string,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.string)]).isRequired,
        children: PropTypes.func
    };

    return connect(mapStateToProps)(WithContent);
};

export { withContent };
