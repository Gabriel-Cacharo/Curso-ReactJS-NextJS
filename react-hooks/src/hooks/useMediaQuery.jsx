import { useEffect, useState } from 'react';

const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

const App = () => {
  useMediaQuery('(min-width: 980px)');
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
