
import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  CalendarCheck, 
  Building2, 
  ClipboardList, 
  BarChart3, 
  Award, 
  BrainCircuit,
  Store,
  Bed,
  Users2,
  Beer,
  TrendingUp,
  Megaphone,
  Box,
  ShoppingCart,
  GraduationCap,
  Package,
  FileText,
  Wrench,
  CreditCard,
  Layers
} from 'lucide-react';
import { CompanyPlan } from './types';

export const MASTER_MODULES = [
  { id: 'master_restaurant', name: 'Master Restaurant', icon: <Store className="w-5 h-5" />, price: 299, color: '#ff4d00' },
  { id: 'master_hotel', name: 'Master Hotel', icon: <Bed className="w-5 h-5" />, price: 299, color: '#007aff' },
  { id: 'master_rrhh', name: 'Master RRHH', icon: <Users2 className="w-5 h-5" />, price: 299, color: '#bf00ff' },
  { id: 'master_bar', name: 'Master Bar', icon: <Beer className="w-5 h-5" />, price: 299, color: '#ffcc00' },
  { id: 'master_sales', name: 'Master Sales', icon: <TrendingUp className="w-5 h-5" />, price: 299, color: '#34c759' },
  { id: 'master_marketing', name: 'Master Marketing', icon: <Megaphone className="w-5 h-5" />, price: 299, color: '#ff2d55' },
  { id: 'master_inventarios', name: 'Master Inventarios', icon: <Box className="w-5 h-5" />, price: 299, color: '#5856d6' },
  { id: 'master_retail', name: 'Master Retail', icon: <ShoppingCart className="w-5 h-5" />, price: 299, color: '#ff9500' },
  { id: 'master_training', name: 'Master Training', icon: <GraduationCap className="w-5 h-5" />, price: 299, color: '#00c7be' },
  { id: 'master_maintenance', name: 'Master Maintenance', icon: <Wrench className="w-5 h-5" />, price: 299, color: '#8e8e93' },
];

export const PLAN_DETAILS = {
  [CompanyPlan.TRIAL]: {
    name: 'PAQUETE PRUEBA',
    price: 0,
    implPrice: 0,
    duration: '30 días',
    limits: { managers: 1, supervisors: 1, employees: 15 },
    color: '#94a3b8',
    features: ['1 Empresa', 'Áreas y Tareas', 'Avisos Básicos']
  },
  [CompanyPlan.PREMIUM]: {
    name: 'PAQUETE PREMIUM',
    price: 399,
    implPrice: 2000,
    modulePrice: 299,
    limits: { managers: 1, supervisors: 4, employees: 40 },
    color: '#22c55e',
    features: ['Dashboard Completo', 'Gestión de Personal', 'Tareas + Seguimiento']
  },
  [CompanyPlan.GOLD]: {
    name: 'PAQUETE GOLD',
    price: 899,
    implPrice: 2000,
    modulePrice: 299,
    limits: { managers: 1, supervisors: 7, employees: 100 },
    color: '#eab308',
    features: ['Reportes Operativos', 'KPIs por Área', 'Roles Personalizados']
  },
  [CompanyPlan.MASTER]: {
    name: 'PAQUETE MASTER',
    price: 1499,
    implPrice: 2000,
    modulePrice: 0,
    limits: { managers: 999999, supervisors: 999999, employees: 999999 },
    color: '#a855f7',
    features: ['Usuarios Ilimitados', 'Multi-empresa', '2 Masters Incluidos', 'Integraciones API']
  }
};

export const CORE_MENU = [
  { id: 'dashboard', name: 'Tablero de Control', icon: <LayoutDashboard className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR'] },
  { id: 'sistemas', name: 'Sistemas', icon: <Settings className="w-5 h-5" />, roles: ['ADMIN'] },
  { id: 'personal', name: 'Personal', icon: <Users className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR'] },
  { id: 'asistencia', name: 'Asistencia', icon: <CalendarCheck className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR', 'COLABORADOR'] },
  { id: 'modulos_activos', name: 'Módulos Activos', icon: <Layers className="w-5 h-5" />, roles: ['ADMIN'] },
  { id: 'tareas', name: 'Tareas', icon: <ClipboardList className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR', 'JEFE_DE_AREA', 'COLABORADOR'] },
  { id: 'reportes', name: 'Reportes', icon: <BarChart3 className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR', 'JEFE_DE_AREA'] },
  { id: 'premios', name: 'Premios', icon: <Award className="w-5 h-5" />, roles: ['ADMIN'] },
  { id: 'planes', name: 'Planes y Masters', icon: <CreditCard className="w-5 h-5" />, roles: ['ADMIN'] },
  { id: 'ia', name: 'IA Maia', icon: <BrainCircuit className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR'] },
];

export const SUPER_ADMIN_MENU = [
  { id: 'sa_dashboard', name: 'Panel Global', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'sa_empresas', name: 'Gestión de Empresas', icon: <Building2 className="w-5 h-5" /> },
  { id: 'sa_planes', name: 'Planes y Paquetes', icon: <Package className="w-5 h-5" /> },
  { id: 'sa_facturacion', name: 'Facturación', icon: <FileText className="w-5 h-5" /> },
];

export const TYPIFICATION_COLORS: Record<string, string> = {
  ON_TIME_OK: 'bg-emerald-500',
  LATE_OK: 'bg-amber-500',
  ON_TIME_NO_QUALITY: 'bg-indigo-500',
  LATE_NO_QUALITY: 'bg-rose-400',
  NOT_DONE: 'bg-rose-600',
  CANCELED: 'bg-slate-400',
};
