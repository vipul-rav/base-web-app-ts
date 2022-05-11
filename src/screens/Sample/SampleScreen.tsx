import React, { memo, useEffect } from 'react';
import { SampleComponent } from './SampleComponent';
import { Post } from '../../redux/reducers/reducerTypes';

interface AllProps  {
    getPostList:()=>void,
    navigateToNextScreen:(path:string)=>void,
    content:any,
    postList:Post[]
}

const SampleScreen:React.FC<AllProps> = memo(function Sample({ getPostList, navigateToNextScreen, content, postList }) {
    useEffect(() => {
        getPostList();
    }, [getPostList]);

    return (
        <div>
            <h1>{content.homePageText}</h1>
            <SampleComponent postList={postList} content={content} />
            <button id="btnContinue" onClick={() => navigateToNextScreen('/sample')}>
                <span>{content.btnContinue}</span>
            </button>
        </div>
    );
});


export { SampleScreen };
