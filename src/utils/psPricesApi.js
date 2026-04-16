const apiKey = "81240253-d2fb-4ede-812d-30d0838d5391";
const baseUrl =
  import.meta.env.VITE_API_URL ||
  "https://streamdexbackend.onrender.com/api/games?";

const region = "us";

const handleServerResponse = (res) =>
  res.ok ? res.json() : Promise.reject(res.status);

async function fetchGames(params = {}) {
  const query = new URLSearchParams({
    region: region,
    name_locale: "en",
    exclude_free: "false",
    ...params,
  });
  const res = await fetch(`${baseUrl}/api/games?${query}`, {
    headers: { "X-API-Key": apiKey },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
async function fetchBrowsePage(collection) {
  const data = await fetchGames({ collection });
  return data.data || [];
}

export default fetchBrowsePage;
export { apiKey };
