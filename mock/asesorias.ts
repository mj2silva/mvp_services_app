import { ServiceRequest } from '../lib/types';

export const serviceRequests : ServiceRequest[] = [
  {
    id: 'fdagffa151x',
    serviceId: 'gf1s5g1s5f1a5',
    service: {
      id: 'gf1s5g1s5f1a5',
      name: 'ASESORÍA PERSONAL',
      active: true,
    },
    modality: 'VIRTUAL',
    context: 'SKYPE',
    status: 'ACEPTADA',
    date: new Date('04-30-2021 21:59:59'),
    code: 'SS002',
  },
  {
    id: 'fdagdff2a',
    serviceId: 'gf1sfa51fad5',
    service: {
      id: 'gf1sfa51fad5',
      name: 'ASESORÍA PERSONAL',
      active: true,
    },
    modality: 'PRESENCIAL',
    context: 'DOMICILIO',
    status: 'PENDIENTE',
    date: new Date('04-04-2021 7:7:59'),
    code: 'SS002',
  },
];
