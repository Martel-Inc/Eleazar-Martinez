
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  SUPERVISOR = 'SUPERVISOR',
  JEFE_DE_AREA = 'JEFE_DE_AREA',
  COLABORADOR = 'COLABORADOR'
}

export enum CompanyPlan {
  TRIAL = 'TRIAL',
  GOLD = 'GOLD',
  PREMIUM = 'PREMIUM',
  MASTER = 'MASTER'
}

export enum TaskTypification {
  COMPLETADA = 'COMPLETADA',
  COMPLETADA_TARDE = 'COMPLETADA_TARDE',
  COMPLETADA_MALA_CALIDAD = 'COMPLETADA_MALA_CALIDAD',
  COMPLETADA_TARDE_MALA_CALIDAD = 'COMPLETADA_TARDE_MALA_CALIDAD',
  SIN_EJECUTAR = 'SIN_EJECUTAR',
  POR_EJECUTAR = 'POR_EJECUTAR'
}

// Valor de tareas según imagen técnica
export const TASK_POINTS: Record<TaskTypification, number> = {
  [TaskTypification.COMPLETADA]: 10,
  [TaskTypification.COMPLETADA_TARDE]: 7,
  [TaskTypification.COMPLETADA_MALA_CALIDAD]: 5,
  [TaskTypification.COMPLETADA_TARDE_MALA_CALIDAD]: 2,
  [TaskTypification.SIN_EJECUTAR]: 0,
  [TaskTypification.POR_EJECUTAR]: 0 // No cuenta para efectividad según imagen
};

/**
 * TaskDefinition interface for task catalog
 */
export interface TaskDefinition {
  id: string;
  name: string;
  description: string;
  departmentId: string;
  areaId: string;
  estimatedTime: number;
  qualityStandard: string;
}

/**
 * TaskAssignment interface for task tracking
 */
export interface TaskAssignment {
  id: string;
  taskId: string;
  assignedToId: string;
  assignedById: string;
  departmentId: string;
  areaId: string;
  status: 'STARTED' | 'COMPLETED' | 'PENDING';
  assignedAt: string;
  startedAt?: string;
  completedAt?: string;
  typification?: TaskTypification;
  qualityScore?: number;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  address: string;
  phone: string;
  email: string;
  schedule: string;
  giro: string;
  plan: CompanyPlan;
  modules: string[];
  onboardingCompleted: boolean;
  // Layout Cliente de imagen
  fechaRegistro?: string;
  contactoPrincipal?: string;
  supervisores?: string[]; // emails
}

export interface Employee {
  id: string;
  name: string;
  fechaNac: string;
  puesto: string;
  fechaIngreso: string;
  departmentId: string;
  areaId: string;
  jornadaLaboral: number; // Horas por día
  diaDescanso: string;
  email: string;
  role: UserRole;
  avatar: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface Prospect {
  id: string;
  nombreEmpresa: string;
  contacto: string;
  telefono: string;
  email: string;
  direccion: string;
  numeroAlternativo: string;
  medioCaptacion: string;
  status: 'VOLVER_LLAMAR' | 'MANDAR_INFO' | 'NO_INTERESA' | 'NO_CONTESTA' | 'BUZON' | 'UNAVIABLE' | 'VISITA' | 'LLAMADA' | 'VIDEO_LLAMADA';
  proximaAccion?: string; // Fecha y hora
}

export type AppContextType = 'CORE' | 'MASTER_MODULE' | 'SUPER_ADMIN' | 'ONBOARDING';
