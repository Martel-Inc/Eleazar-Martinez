
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
  UserCheck,
  Zap
} from 'lucide-react';

export const MASTER_MODULES = [
  { id: 'master_restaurant', name: 'Master Restaurant', icon: <Store className="w-5 h-5" /> },
  { id: 'master_hotel', name: 'Master Hotel', icon: <Bed className="w-5 h-5" /> },
  { id: 'master_rrhh', name: 'Master RRHH', icon: <Users2 className="w-5 h-5" /> },
  { id: 'master_bar', name: 'Master Bar', icon: <Beer className="w-5 h-5" /> },
  { id: 'master_sales', name: 'Master Sales', icon: <TrendingUp className="w-5 h-5" /> },
  { id: 'master_marketing', name: 'Master Marketing', icon: <Megaphone className="w-5 h-5" /> },
  { id: 'master_inventarios', name: 'Master Inventarios', icon: <Box className="w-5 h-5" /> },
  { id: 'master_retail', name: 'Master Retail', icon: <ShoppingCart className="w-5 h-5" /> },
  { id: 'master_training', name: 'Master Training', icon: <GraduationCap className="w-5 h-5" /> },
];

export const CORE_MENU = [
  { id: 'dashboard', name: 'Tablero de Control', icon: <LayoutDashboard className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR'] },
  { id: 'sistemas', name: 'Sistemas', icon: <Settings className="w-5 h-5" />, roles: ['ADMIN'] },
  { id: 'personal', name: 'Personal', icon: <Users className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR'] },
  { id: 'asistencia', name: 'Asistencia', icon: <CalendarCheck className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR', 'COLABORADOR'] },
  { id: 'departamentos', name: 'Departamentos', icon: <Building2 className="w-5 h-5" />, roles: ['ADMIN'] },
  { id: 'tareas', name: 'Tareas', icon: <ClipboardList className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR', 'JEFE_DE_AREA', 'COLABORADOR'] },
  { id: 'reportes', name: 'Reportes', icon: <BarChart3 className="w-5 h-5" />, roles: ['ADMIN', 'SUPERVISOR', 'JEFE_DE_AREA'] },
  { id: 'premios', name: 'Premios', icon: <Award className="w-5 h-5" />, roles: ['ADMIN'] },
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
