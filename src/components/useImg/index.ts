export default async function useImg() {
  const url = 'https://infinity-api.infinitynewtab.com/random-wallpaper'
  const result = fetch(url).then((response) => response.json())
  return result
}
