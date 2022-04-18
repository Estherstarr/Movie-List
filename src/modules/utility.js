const showApi = 'https://api.tvmaze.com/shows';

const fetchShows = async () => {
  const res = await fetch(showApi);
  return res.json();
};
export default { fetchShows };
