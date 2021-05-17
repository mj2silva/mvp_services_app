import firebase from 'firebase';

enum Grade {
  'PRIMERO',
  'SEGUNDO',
  'TERCERO',
  'CUARTO',
  'QUINTO',
  'SEXTO',
}

export type Student = {
  id: string,
  dni: string,
  name: string,
  lastname: string,
  grade: Grade,
  level: 'PRIMARIA' | 'SECUNDARIA'
}

export type NumeralService = {
  id: string,
  name: string,
  active: boolean
}

export enum VirtualContext {
  'SKYPE', 'GOOGLE MEET'
}

export enum PresentialContext {
  'LOCAL', 'DOMICILIO'
}

export type Schedule = {
  date: Date,
  startTime: number,
  finishTime: number,
}

/*export type ServiceRequest = {
  id: string,
  serviceId: string
  service?: NumeralService,
  modality: 'VIRTUAL'|'PRESENCIAL',
  context: VirtualContext|PresentialContext,
  status: 'ACEPTADA' | 'PENDIENTE' | 'RECHAZADA',
  date: Date,
  code: string,
}*/

export type ServiceRequestsResponse = {
  aditionalInfo: {
    goal: string,
    subject: string,
    topic: string,
  },
  code:string,
  metadata?: {
    createdBy?: {
      firstLastName: string,
      firstName: string,
      middleNames: string,
      relationship: string,
      secondLastName: string,
    },
    createdDate?: firebase.firestore.Timestamp,
  }
  serviceType: string,
  serviceDate?: firebase.firestore.Timestamp,
  status: string,
  uid: string,
}

export type ServiceRequest = {
  id: string,
  aditionalInfo: {
    goal: string,
    subject: string,
    topic: string,
  },
  code:string,
  metadata?: {
    createdBy?: {
      firstLastName: string,
      firstName: string,
      middleNames: string,
      relationship: string,
      secondLastName: string,
    },
    createdDate?: Date,
  }
  serviceType: string,
  serviceDate?: Date,
  status: string,
  uid: string,
}