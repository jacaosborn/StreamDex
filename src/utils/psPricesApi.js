const baseUrl =
  import.meta.env.VITE_API_URL ||
  "https://streamdexbackend.onrender.com/api/games?";

const region = "us";

function fetchBrowsePage(collection) {
  const query = new URLSearchParams({
    region: region,
    name_locale: "en",
    exclude_free: "false",
    collection,
  });
  return fetch(`${baseUrl}${query}`)
    .then((res) => res.json())
    .then((data) => data.data || [])
    .catch((err) => Promise.reject(err));
}

export default fetchBrowsePage;
