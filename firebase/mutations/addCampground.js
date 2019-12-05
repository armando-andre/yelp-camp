import loadDB from '../../lib/load-firebase';

const addCampgroundMutation = async (collection) => {
  const db = await loadDB();

  db.collection(collection).add({

  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

export default addCampgroundMutation;
