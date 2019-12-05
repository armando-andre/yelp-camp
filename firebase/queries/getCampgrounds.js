import loadDB from '../../lib/load-firebase';

const getCollection = async (collection) => {
  const db = await loadDB();
  const ref = await db.collection(collection).get()

  let campgrounds = [];

  ref.forEach(doc => {
    if (!doc.exists) {
      console.log('No such document')
    }
    campgrounds.push(doc.data());
  })

  return { campgrounds };
}

export default getCollection;