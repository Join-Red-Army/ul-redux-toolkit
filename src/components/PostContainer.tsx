import { postAPI } from '../services/PostService'
import PostItem from './PostItem';

const PostContainer = () => {
  const { data, isLoading, error, refetch } = postAPI.useFetchAllPostsQuery( 5, { pollingInterval: 10000 } );

  return (
    <div className='post__list'>

      {/* принудительно перезапросить данные */}
      <button onClick={ () => refetch() }>Перезапросить</button>

      { isLoading ? <h1>Идёт загрузка</h1> : null }
      { error ? <h1>Произошла ошибка</h1> : null }

      { data ? data.map((post) => <PostItem post={ post } key={ post.id }/> ) : null }

    </div>
  )
};


export default PostContainer;