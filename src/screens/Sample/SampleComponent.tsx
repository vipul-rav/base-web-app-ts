import React, { memo } from 'react';
import { Post } from '../../redux/reducers/reducerTypes';


interface AllProps  {
   
    content:any,
    postList:Post[]
}

const SampleComponent:React.FC<AllProps> = memo(({ postList, content }) => (
    <div>
        {content.postListHeader}
        <ul>{postList && postList.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
));

export { SampleComponent };
