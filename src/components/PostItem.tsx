import React from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps {
  post: IPost
}


const PostItem: React.FC<PostItemProps> = (props) => {
  const { post } = props;
  
  return (
    <div className='post'>
      {post.id}. { post.title }
      {/* <button>Удалить пост</button> */}
    </div>
  );
};

export default PostItem;