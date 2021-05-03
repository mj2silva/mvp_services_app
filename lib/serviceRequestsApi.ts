import { ServiceRequest } from './types';
import { serviceRequests } from '../mock/asesorias';
import { firestore } from './firebase';

export const getServiceRequests = async () : Promise<ServiceRequest[]> => {
  const serviceRequestsPromise : Promise<ServiceRequest[]> = new Promise((resolve) => {
    setTimeout(() => resolve(serviceRequests), 3000);
  });
  const serviceRequests = await firestore.collection('collection')
  return serviceRequestsPromise;
};

export const getServiceRequest = async () : Promise<ServiceRequest> => null;
