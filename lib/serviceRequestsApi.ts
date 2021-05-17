import { ServiceRequest, ServiceRequestResponse } from './types';
import { serviceRequests } from '../mock/asesorias';
import { firestore } from './firebase';


export const getServiceRequests = async () : Promise<ServiceRequest[]> => {
  const querySnapshot = await firestore.collection('serviceRequests').get();
  const documents: ServiceRequest[] = [];
  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as ServiceRequestResponse;
    documents.push({
      id: doc.id,
      codigo: data.codigo,
      aditionalInfo: data.aditionalInfo,
      metadata: {
        createdDate: new Date(data.metadata?.created_date?.toMillis()),
      },
      serviceDate: new Date(data.service_date?.toMillis()),
      serviceType: data.serviceType,
      status: data.status,
      parentInfo: data.parentInfo,
      studentInfo: data.studentInfo,
      modality: data.modality,
      context: data.context,
      place: data.place,
      schedule: data.schedule,
    });
  });
  return documents;
};

export const getServiceRequest = async () : Promise<ServiceRequest> => null;
