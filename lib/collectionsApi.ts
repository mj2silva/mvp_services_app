import { firestore } from './firebase';

export async function getCollection(collection) {
  try {
    const querySnapshot = await firestore.collection(collection).get();
    // console.log(querySnapshot.docs);
    const collections = [];
    querySnapshot.forEach((doc) => {
      collections.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return collections;
  } catch (error) {
    console.log(error);
  }
}
