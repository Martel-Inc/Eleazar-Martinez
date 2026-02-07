
import React, { useState } from 'react';
import { 
  Building2, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Grid, 
  Users, 
  Clock,
  Briefcase
} from 'lucide-react';

type SystemsCategory = 'empleados' | 'departamentos' | 'areas' | 'puestos' | 'premios';

export const SystemsView: React.FC = () => {
  const [activeCat, setActiveCat] = useState<SystemsCategory>('empleados');

  const categories = [
    { id: 'empleados', name: 'Empleados', icon: <Users className="w-4 h-4" /> },
    { id: 'departamentos', name: 'Deptos', icon: <Building2 className="w-4 h-4" /> },
    { id: 'areas', name: 'Áreas', icon: <Grid className="w-4 h-4" /> },
    { id: 'puestos', name: 'Puestos', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Configuración de Sistemas</h2>
          <p className="text-slate-300 font-medium">Arquitectura de layouts y gestión operativa</p>
        </div>
        <button className="px-8 py-4 bg-[#22c55e] text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_0_10px_#22c55e] hover:scale-105 transition-all flex items-center gap-3">
          <Plus className="w-5 h-5" /> NUEVO {activeCat.slice(0, -1).toUpperCase()}
        </button>
      </div>

      <div className="bg-slate-950/40 backdrop-blur-2xl p-3 rounded-[2.2rem] shadow-[0_0_6px_#a855f7] border-[3px] border-[#22c55e] flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id as SystemsCategory)}
            className={`px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center gap-3 ${
              activeCat === cat.id ? 'bg-[#22c55e] text-slate-950 shadow-[0_0_10px_#22c55e]' : 'text-slate-400 hover:text-white'
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_0_6px_#a855f7] border-[3px] border-[#22c55e] overflow-hidden">
        <div className="p-8 border-b border-white/10 flex flex-col md:flex-row justify-between gap-6 items-center">
           <div className="relative flex-1 max-w-md w-full">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#22c55e]" />
             <input type="text" placeholder={`Filtrar ${activeCat}...`} className="w-full pl-12 pr-4 py-4 bg-slate-950/60 border-[2px] border-[#22c55e]/30 rounded-2xl text-xs font-black uppercase tracking-widest focus:ring-2 focus:ring-[#22c55e] text-white placeholder-slate-500" />
           </div>
           <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Total items: <span className="text-[#22c55e]">24</span>
           </div>
        </div>

        <EmployeeTable />
      </div>
    </div>
  );
};

const EmployeeTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead className="bg-slate-950/40 text-[10px] font-black text-[#22c55e] uppercase tracking-widest">
        <tr>
          <th className="px-8 py-5">Colaborador / Puesto</th>
          <th className="px-8 py-5">Depto / Área</th>
          <th className="px-8 py-5">Estatus</th>
          <th className="px-8 py-5 text-right">Acciones</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {[1, 2, 3].map(i => (
          <tr key={i} className="hover:bg-white/5 transition-colors group">
            <td className="px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-950 border border-[#22c55e]/30 rounded-xl flex items-center justify-center text-[#22c55e] font-bold">EM</div>
                <div>
                  <p className="text-sm font-black text-white">Empleado Demo {i}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter tracking-widest">Operativo JR</p>
                </div>
              </div>
            </td>
            <td className="px-8 py-6">
              <p className="text-xs font-black text-slate-200 uppercase">Sistemas</p>
              <p className="text-[10px] font-bold text-[#22c55e] uppercase">Soporte Técnico</p>
            </td>
            <td className="px-8 py-6">
              <div className="flex items-center gap-2 text-xs font-black text-emerald-400">
                <Clock className="w-3.5 h-3.5" /> ACTIVO
              </div>
            </td>
            <td className="px-8 py-6 text-right">
              <div className="flex justify-end gap-2">
                <button className="p-2.5 bg-slate-950/60 text-slate-400 rounded-xl border border-white/5 hover:border-[#22c55e] hover:text-[#22c55e] transition-all"><Edit3 className="w-4 h-4"/></button>
                <button className="p-2.5 bg-slate-950/60 text-slate-400 rounded-xl border border-white/5 hover:border-rose-500 hover:text-rose-500 transition-all"><Trash2 className="w-4 h-4"/></button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
