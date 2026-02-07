
import React, { useState } from 'react';
import { 
  Plus, 
  ClipboardList, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Star
} from 'lucide-react';
import { UserRole } from '../types';

export const TaskManagementView: React.FC<{ role: UserRole }> = ({ role }) => {
  const [activeMode, setActiveMode] = useState<'catalogo' | 'asignacion'>('asignacion');

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-widest uppercase">Gestión de Tareas</h2>
          <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Protocolo de Operación Maia</p>
        </div>
        <div className="flex bg-black/80 p-1.5 rounded-2xl border-[3px] border-[#22c55e] shadow-[0_0_6px_#a855f7] backdrop-blur-xl">
          <button 
            onClick={() => setActiveMode('asignacion')}
            className={`px-6 py-3 rounded-xl text-xs font-black transition-all ${activeMode === 'asignacion' ? 'bg-[#22c55e] text-black shadow-[0_0_10px_#22c55e]' : 'text-slate-400'}`}
          >
            ASIGNACIONES
          </button>
          <button 
            onClick={() => setActiveMode('catalogo')}
            className={`px-6 py-3 rounded-xl text-xs font-black transition-all ${activeMode === 'catalogo' ? 'bg-[#22c55e] text-black shadow-[0_0_10px_#22c55e]' : 'text-slate-400'}`}
          >
            CATÁLOGO (ALTA)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Asignadas', val: 124, icon: <ClipboardList /> },
          { label: 'Concluidas', val: 98, icon: <CheckCircle2 /> },
          { label: 'Por Concluir', val: 18, icon: <Clock /> },
          { label: 'No Realizadas', val: 8, icon: <AlertTriangle /> },
        ].map((s, i) => (
          <div key={i} className="bg-black/40 backdrop-blur-3xl p-6 rounded-[2rem] border-[3px] border-[#22c55e] shadow-[0_0_6px_#a855f7] flex items-center gap-5">
             <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black border border-[#22c55e]/30 text-[#22c55e]">
                {React.cloneElement(s.icon as any, { size: 20 })}
             </div>
             <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{s.label}</p>
                <p className="text-2xl font-black text-white">{s.val}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="bg-black/40 backdrop-blur-3xl rounded-[3rem] shadow-[0_0_6px_#a855f7] border-[3px] border-[#22c55e] overflow-hidden">
        <div className="p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="relative flex-1 max-w-md w-full">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#22c55e]" />
             <input type="text" placeholder="Filtrar tareas..." className="w-full pl-12 pr-4 py-3.5 bg-black border-[2px] border-[#22c55e]/30 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-[#22c55e] text-white placeholder-slate-600" />
           </div>
           <button className="px-6 py-3.5 bg-[#22c55e] text-black rounded-2xl font-black flex items-center gap-2 shadow-[0_0_10px_#22c55e] text-[10px] uppercase tracking-widest">
             <Plus className="w-5 h-5" /> {activeMode === 'asignacion' ? 'NUEVA ASIGNACIÓN' : 'ALTA DE TAREA'}
           </button>
        </div>

        <table className="w-full text-left">
           <thead className="bg-black text-[9px] font-black text-[#22c55e] uppercase tracking-widest">
             <tr>
               <th className="px-8 py-5">Información Tarea</th>
               <th className="px-8 py-5">Responsable</th>
               <th className="px-8 py-5">Estado</th>
               <th className="px-8 py-5 text-right">Métricas</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-white/10">
             {[1, 2, 3, 4].map(i => (
               <tr key={i} className="hover:bg-white/5 transition-colors">
                 <td className="px-8 py-6">
                    <p className="text-sm font-black text-white uppercase tracking-widest">Tarea Operativa {i}</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase">Sistemas • Área {i}</p>
                 </td>
                 <td className="px-8 py-6">
                    <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Juan Perez</span>
                 </td>
                 <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_5px_#22c55e]" />
                       <span className="text-[10px] font-black text-white uppercase">CONCLUIDA</span>
                    </div>
                 </td>
                 <td className="px-8 py-6 text-right">
                    <span className="text-lg font-black text-[#22c55e]">95%</span>
                 </td>
               </tr>
             ))}
           </tbody>
        </table>
      </div>
    </div>
  );
};
