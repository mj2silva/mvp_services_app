import { ReactNode } from 'react';

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

export type ServiceRequest = {
  id: string,
  serviceId: string
  service?: NumeralService,
  modality: 'VIRTUAL'|'PRESENCIAL',
  context: VirtualContext|PresentialContext,
  status: 'ACEPTADA' | 'PENDIENTE' | 'RECHAZADA',
  date: Date,
  code: string,
}
