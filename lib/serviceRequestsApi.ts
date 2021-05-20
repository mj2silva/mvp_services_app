import { ServiceRequest, ServiceRequestResponse } from './types';
import { firestore } from './firebase';

export const getServiceRequests = async () : Promise<ServiceRequest[]> => {
  const querySnapshot = await firestore.collection('serviceRequests').get();
  const documents: ServiceRequest[] = [];
  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as ServiceRequestResponse;
    documents.push({
      id: doc.id,
      code: data.code,
      aditionalInfo: data.aditionalInfo,
      metadata: {
        createdDate: new Date(data.metadata?.createdDate?.toMillis()),
      },
      serviceDate: new Date(data.serviceDate?.toMillis()),
      serviceType: data.serviceType,
      status: data.status,
      parentInfo: data.parentInfo,
      studentInfo: data.studentInfo,
      modality: data.modality,
      context: data.context,
      place: data.place,
      schedule: data.schedule
    });
  });
  return documents;
};

export const getServiceRequest = async () : Promise<ServiceRequest> => null;
