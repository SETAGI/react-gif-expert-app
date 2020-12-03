
export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=XbJfOO44RGJ8sxpEN5cTX7GxwBnfjBN7`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifsData = data.map((item) => {
    return {
      gif: item.images.downsized_medium.url,
      title: item.title,
      id: item.id
    };
  });

  console.log(gifsData);
  return gifsData;

};