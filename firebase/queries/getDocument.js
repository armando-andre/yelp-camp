import loadDB from '../../lib/load-firebase';

const getDocument = async (collection, document) => {
  const db = await loadDB();

  var docRef = db.collection(collection).doc(document);

  docRef.get().then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}

export default getDocument;

// Example of how to use this function 
// import getDocument from '../firebase/queries/getDocument';
// console.log(getDocument('collectionName', 'documentName or documentID'));