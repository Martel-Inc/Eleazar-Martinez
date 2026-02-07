
import React from 'react';
import { 
  Search, 
  UserMinus, 
  Award,
  Zap,
  CalendarCheck
} from 'lucide-react';

export const PersonalView: React.FC = () => {
  const employees = [
    { name: 'Ana Martínez', area: 'Sistemas', status: 'Presente', late: 0, quality: 98, avatar: 'https://i.pravatar.cc/150?u=ana' },
    { name: 'Carlos Ruíz', area: 'Operación', status: 'Retardo', late: 4, quality: 72, avatar: 'https://i.pravatar.cc/150?u=carlos' },
    { name: 'Elena Gómez', area: 'Ventas', status: 'Presente', late: 2, quality: 85, avatar: 'https://i.pravatar.cc/150?u=elena' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Personal y Asistencia</h2>
          <p className="text-slate-300 font-medium">Gestión integral de colaboradores</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 bg-slate-950/40 border-[3px] border-[#22c55e] text-[#22c55e] rounded-2xl font-black text-[10px] uppercase shadow-[0_0_6px_#a855f7] hover:scale-105 transition-all flex items-center gap-2">
            <CalendarCheck className="w-4 h-4" /> ASIGNAR DESCANSOS
          </button>
          <button className="px-5 py-3 bg-[#22c55e] text-slate-950 rounded-2xl font-black text-[10px] uppercase shadow-[0_0_10px_#22c55e] hover:scale-105 transition-all flex items-center gap-2">
            <Zap className="w-4 h-4" /> REGISTRAR PERMISO
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-3xl rounded-[3rem] shadow-[0_0_6px_#a855f7] border-[3px] border-[#22c55e] overflow-hidden">
          <div className="p-8 border-b border-white/10">
             <div className="relative max-w-md">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#22c55e]" />
               <input type="text" placeholder="Buscar colaborador..." className="w-full pl-12 pr-4 py-3.5 bg-slate-950/60 border-[2px] border-[#22c55e]/30 rounded-2xl text-sm font-medium text-white placeholder-slate-500 focus:ring-2 focus:ring-[#22c55e]" />
             </div>
          </div>
          
          <table className="w-full text-left">
             <thead className="bg-slate-950/40 text-[10px] font-black text-[#22c55e] uppercase tracking-[0.2em]">
               <tr>
                 <th className="px-8 py-5">Colaborador</th>
                 <th className="px-8 py-5">Estatus Hoy</th>
                 <th className="px-8 py-5">Eficiencia</th>
                 <th className="px-8 py-5 text-right">Retardos</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-white/5">
               {employees.map((emp, i) => (
                 <tr key={i} className="hover:bg-white/5 transition-colors group">
                   <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                         <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-2xl border-[2px] border-[#22c55e]/30 shadow-[0_0_5px_#a855f7]" />
                         <div>
                            <p className="text-sm font-black text-white">{emp.name}</p>
                            <p className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest">{emp.area}</p>
                         </div>
                      </div>
                   </td>
                   <td className="px-8 py-6">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase ${
                        emp.status === 'Presente' ? 'bg-[#22c55e]/10 text-[#22c55e]' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {emp.status}
                      </span>
                   </td>
                   <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full ${emp.quality > 90 ? 'bg-[#22c55e]' : 'bg-amber-500'}`} style={{ width: `${emp.quality}%` }} />
                        </div>
                        <span className="text-xs font-black text-white">{emp.quality}%</span>
                      </div>
                   </td>
                   <td className="px-8 py-6 text-right">
                      <span className={`text-sm font-black ${emp.late > 0 ? 'text-rose-500 shadow-[0_0_10px_#ef4444]' : 'text-slate-500'}`}>{emp.late}</span>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border-[3px] border-[#22c55e] shadow-[0_0_6px_#a855f7]">
              <h4 className="text-lg font-black text-white tracking-tighter mb-6 flex items-center gap-3 uppercase">
                <Award className="w-6 h-6 text-amber-500" /> MEJORES EMPLEADOS
              </h4>
              <div className="space-y-4">
                 {employees.sort((a,b) => b.quality - a.quality).slice(0,3).map((emp, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-slate-950/60 rounded-2xl border border-[#22c55e]/20">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-[#22c55e] text-slate-950 flex items-center justify-center font-black text-xs italic">{i+1}</div>
                         <span className="text-sm font-bold text-white">{emp.name}</span>
                      </div>
                      <span className="text-xs font-black text-[#22c55e]">{emp.quality}%</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-rose-600/20 backdrop-blur-3xl p-8 rounded-[2.5rem] border-[3px] border-rose-500/40 shadow-[0_0_10px_#ef4444] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform"><UserMinus className="w-24 h-24" /></div>
              <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-1">ALERTA: AUSENTISMO</p>
              <h4 className="text-xl font-black mb-4 uppercase">Métricas de Faltas</h4>
              <div className="flex items-end gap-2">
                 <span className="text-5xl font-black">12%</span>
                 <span className="text-xs font-bold mb-2 text-rose-300">+2.4% CRÍTICO</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
