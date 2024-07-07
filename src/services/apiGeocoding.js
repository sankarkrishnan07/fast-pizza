export async function getAddress(lat, lng) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  if (!res.ok) throw new Error("Failed to get the address");

  const data = await res.json();
  return data;
}
