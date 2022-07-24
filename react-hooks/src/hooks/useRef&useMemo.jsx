import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';

const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick()}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function UseRefEUseMemoPage() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  const handleClick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    input.current.focus();
  }, [value]);

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} ref={input} />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} handleClick={() => handleClick(post.title)} />)
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default UseRefEUseMemoPage;
