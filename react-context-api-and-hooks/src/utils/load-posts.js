export const loadPosts = async () => {
  const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postResponse, photosResponse]);

  const postJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
