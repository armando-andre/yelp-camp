import Unsplash, { toJson } from 'unsplash-js';

export default async function yelpFusion() {
  const fetch = require('node-fetch');

  global.fetch = fetch;

  const unsplash = new Unsplash({
    accessKey: "b5aa1059efcba7dac2cfee25019e2601eee5813f4cd78dc7f9fe3e8d84c303bd"
  });

  return unsplash.search.photos("camping", 1, 20, { orientation: "portrait" })
    .then(toJson)
    .then(json => {
      const unsplashData = json.results

      // console.log(data)

      return unsplashData
  });
}