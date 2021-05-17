import { ServiceRequest, ServiceRequestsResponse } from './types';
import { firestore } from './firebase';

const serviceCollection = 'serviceRequests';

export const getServiceRequests = async () : Promise<ServiceRequest[]> => {
  const querySnapshot = await firestore.collection(serviceCollection).where('metadata.createdBy.firstName', '==', 'Diego').get();
  const documents: ServiceRequest[] = [];
  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as ServiceRequestsResponse;
    documents.push({
      id: doc.id,
      code: data.code,
      aditionalInfo: data.aditionalInfo,
      metadata: {
        createdBy: {
          firstLastName: data.metadata?.createdBy?.firstLastName,
          firstName: data.metadata?.createdBy?.firstName,
          middleNames: data.metadata?.createdBy?.middleNames,
          relationship: data.metadata?.createdBy?.relationship,
          secondLastName: data.metadata?.createdBy?.secondLastName,
        },
        createdDate: new Date(data.metadata?.createdDate?.toMillis()),
      },
      serviceDate: new Date(data.serviceDate?.toMillis()),
      serviceType: data.serviceType,
      status: data.status,
      uid: data.uid,
    });
  });
  return documents;
};

/*export const readTopics = () => {
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
}*/

export const getServiceRequest = async () : Promise<ServiceRequest> => null;
