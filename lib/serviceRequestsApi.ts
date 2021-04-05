import { ServiceRequest } from './types';
import { serviceRequests } from '../mock/asesorias';

export const getServiceRequests = async () : Promise<ServiceRequest[]> => {
  const serviceRequestsPromise : Promise<ServiceRequest[]> = new Promise((resolve) => {
    setTimeout(() => resolve(serviceRequests), 3000);
  });
  return serviceRequestsPromise;
};

export const getServiceRequest = async () : Promise<ServiceRequest> => null;
