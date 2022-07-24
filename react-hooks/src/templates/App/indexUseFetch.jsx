import { useState, useEffect, useRef } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = url;
      changed = true;
    }

    if (changed) {
      setShouldLoad((c) => !c);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));

      try {
        const response = await fetch(urlRef.current, { signal, ...optionsRef.current });
        const jsonResponse = await response.json();

        if (!wait) {
          setResult(jsonResponse);
          setLoading(false);
        }
      } catch (err) {
        if (!wait) {
          setLoading(false);
        }

        console.log(err.message);
      }
    };

    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};

const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};

export default Home;
