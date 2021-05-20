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

// export type ServiceRequest = {
//   id: string,
//   serviceId: string
//   service?: NumeralService,
//   modality: 'VIRTUAL'|'PRESENCIAL',
//   context: VirtualContext|PresentialContext,
//   status: 'ACEPTADA' | 'PENDIENTE' | 'RECHAZADA',
//   date: Date,
//   code: string,
// }

export type ServiceRequestResponse = {
  aditionalInfo: {
    goal: string,
    subject: string,
    topic: string,
  },
  code: string,
  modality: string,
  context: string,
  place: string,
  schedule: string,
  serviceDate?: firebase.firestore.Timestamp,
  metadata?: {
    createdDate: firebase.firestore.Timestamp,
  }
  serviceType: string,
  status: string,
  parentInfo: {
    contact: string,
    firstLastName: string,
    firstName: string,
    middleNames: string,
    relationship: string,
    secondLastName: string
  },
  studentInfo: {
    dni: string,
    firstLastName: string,
    firstName: string,
    grade: string,
    level: string,
    middleNames: string,
    school: string,
    secondLastName: string
  }
}

export type ServiceRequest = {
  id: string,
  aditionalInfo: {
    goal: string,
    subject: string,
    topic: string,
  },
  code: string,
  modality: string,
  context: string,
  place: string,
  schedule: string,
  serviceDate: Date,
  metadata?: {
    createdDate: Date,
  }
  serviceType: string,
  status: string,
  parentInfo: {
    contact: string,
    firstLastName: string,
    firstName: string,
    middleNames: string,
    relationship: string,
    secondLastName: string
  },
  studentInfo: {
    dni: string,
    firstLastName: string,
    firstName: string,
    grade?: string,
    level: string,
    middleNames: string,
    school: string,
    secondLastName: string
  }
}
