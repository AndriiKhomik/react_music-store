export const getAlbums = async () => {
  const res = await fetch('/items.json');
  return await res.json()
};

