import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPostList } from '../../redux/actions/postAction';
import { navigateToNextScreen } from '../../redux/actions/navigationAction';
import { withContent } from '../../hocs/withContent';
import { SampleScreen } from './SampleScreen';
import {  Dispatch } from '@reduxjs/toolkit';


const mapStateToProps= ({post}:any) => ({ postList: post.postList });
const mapDispatchToProps = (dispatch:Dispatch) =>
    bindActionCreators(
        {
            navigateToNextScreen,
            getPostList
        },
        dispatch
    );

const SampleContainer = withContent(connect(mapStateToProps, mapDispatchToProps)(SampleScreen));

export { SampleContainer };
