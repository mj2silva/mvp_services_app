import { ServiceRequest } from './types';
import { serviceRequests } from '../mock/asesorias';
import { firestore , db } from './firebase';
import { delBasePath } from 'next/dist/next-server/lib/router/router';


export const getServiceRequests = async () : Promise<ServiceRequest[]> => {
  const serviceRequestsPromise : Promise<ServiceRequest[]> = new Promise((resolve) => {
    setTimeout(() => resolve(serviceRequests));
  });
  
  const serviceRequests = await firestore.collection('collection').get();
  return serviceRequestsPromise;
};


export const addRequest = ({})

export const readTopics = () => {
  return db.collection("serviceRequests")
  .get()
  .then(snapshot => {
    return snapshot.docs.map(doc =>{
      const data = doc.data()
      const id = doc.id

      return {
        id,
        ...data,
      }
    })
  })
}

export const getServiceRequest = async () : Promise<ServiceRequest> => null;
