import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsProvider } from '../../contexts/PostsProvider';

import './styles.css';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div className="App">
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
