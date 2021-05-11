import { firestore } from './firebase';

export async function getCollection(collection) {
  try {
    const querySnapshot = await firestore.collection(collection).get();
    const documents = [];
    querySnapshot.docs.forEach((doc) => {
      documents.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return documents;
  } catch (error) {
    console.log(error);
  }
}
