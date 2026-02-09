
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart
} from 'recharts';
import { PLAN_DETAILS, MASTER_MODULES } from '../constants';
import { 
  Building2, 
  Plus, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ArrowUpRight,
  Package,
  Layers,
  Search,
  ChevronRight,
  Zap,
  Target,
  Edit3,
  CheckCircle,
  XCircle,
  Star,
  Crown
} from 'lucide-react';

export const SuperAdminView: React.FC = () => {
  const [tab, setTab] = useState<'kpis' | 'prospectos' | 'clientes' | 'planes'>('kpis');

  // Mock data para las gráficas
  const historicoEmpresas = [
    { name: 'Ene', val: 120 }, { name: 'Feb', val: 210 }, { name: 'Mar', val: 180 }, 
    { name: 'Abr', val: 240 }, { name: 'May', val: 320 }, { name: 'Jun', val: 450 }
  ];

  const ingresosPaquetes = [
    { name: 'Trial', income: 0 }, 
    { name: 'Gold', income: 133052 }, 
    { name: 'Premium', income: 79800 }, 
    { name: 'Master', income: 224850 }
  ];

  const distribucionPlanes = [
    { name: 'Trial', value: 400 }, { name: 'Premium', value: 300 }, { name: 'Gold', value: 200 }, { name: 'Master', value: 100 }
  ];

  const metasSistema = [
    { subject: 'Uptime', A: 145, fullMark: 150 },
    { subject: 'Soporte', A: 120, fullMark: 150 },
    { subject: 'Ventas', A: 135, fullMark: 150 },
    { subject: 'Retención', A: 140, fullMark: 150 },
    { subject: 'Churn', A: 30, fullMark: 150 },
  ];

  const actividadRealTime = [
    { time: '08:00', users: 340 }, { time: '12:00', users: 890 }, { time: '16:00', users: 720 }, { time: '20:00', users: 450 }
  ];

  const funnelVentas = [
    { name: 'Leads', total: 1200, conv: 800 },
    { name: 'Pruebas', total: 600, conv: 420 },
    { name: 'Pagos', total: 300, conv: 280 },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#a855f7', '#ffffff'];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Protocolo <span className="text-[#22c55e]">Omni</span> Maestro</h2>
          <p className="text-[#22c55e] font-black text-[11px] uppercase tracking-[0.6em] mt-2 flex items-center gap-3">
             <span className="w-8 h-0.5 bg-[#22c55e] rounded-full" /> CONTROL CENTRAL DE LA NUBE
          </p>
        </div>
        <div className="flex bg-black/80 p-1.5 rounded-3xl border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-xl">
           <button onClick={() => setTab('kpis')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'kpis' ? 'bg-[#22c55e] text-black shadow-lg' : 'text-slate-400'}`}>Estadísticas</button>
           <button onClick={() => setTab('planes')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'planes' ? 'bg-[#22c55e] text-black shadow-lg' : 'text-slate-400'}`}>Paquetes</button>
           <button onClick={() => setTab('clientes')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'clientes' ? 'bg-[#22c55e] text-black shadow-lg' : 'text-slate-400'}`}>Clientes</button>
        </div>
      </div>

      {tab === 'kpis' && (
        <div className="grid grid-cols-12 gap-8">
          <StatCard label="PRUEBAS ACTIVAS" val="42" icon={<Activity />} color="#22c55e" trend="+12%" className="col-span-3" />
          <StatCard label="PAQUETES GOLD" val="148" icon={<Zap />} color="#eab308" trend="+5%" className="col-span-3" />
          {/* Fix: Added missing Star icon to imports */}
          <StatCard label="TOTAL PREMIUM" val="200" icon={<Star />} color="#3b82f6" trend="+2%" className="col-span-3" />
          {/* Fix: Added missing Crown icon to imports */}
          <StatCard label="EMPRESAS MASTER" val="150" icon={<Crown />} color="#a855f7" trend="+15%" className="col-span-3" />

          <ChartBox title="FLUJO DE INGRESOS MENSUAL" className="col-span-12 lg:col-span-8">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={historicoEmpresas}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#64748b', fontSize:10, fontWeight:900}} />
                <YAxis hide />
                <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                <Area type="monotone" dataKey="val" stroke="#22c55e" strokeWidth={5} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartBox>

          <ChartBox title="DISTRIBUCIÓN DE PLANES" className="col-span-12 lg:col-span-4">
             <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie data={distribucionPlanes} innerRadius={70} outerRadius={100} paddingAngle={8} dataKey="value">
                    {distribucionPlanes.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                </PieChart>
             </ResponsiveContainer>
          </ChartBox>
        </div>
      )}

      {tab === 'planes' && (
        <div className="bg-black/40 backdrop-blur-3xl rounded-[4rem] p-12 border-[4px] border-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.2)]">
           <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-black text-white tracking-widest uppercase">Editor de Paquetes Maestros</h3>
              <button className="px-8 py-4 bg-[#22c55e] text-black rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_#22c55e]">Añadir Nueva Promoción</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(PLAN_DETAILS).map(([key, details]) => (
                 <div key={key} className="p-8 bg-white/5 rounded-[2.5rem] border-[3px] border-white/5 space-y-6">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ID: {key}</span>
                       <Edit3 className="w-4 h-4 text-[#22c55e] cursor-pointer" />
                    </div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tighter">{details.name}</h4>
                    <p className="text-4xl font-black text-[#22c55e] tracking-tighter">${details.price}</p>
                    <div className="space-y-3 pt-4 border-t border-white/5">
                       <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-between">
                          EMPLEADOS: <span className="text-white">{details.limits.employees}</span>
                       </p>
                       <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-between">
                          SUPERVISORES: <span className="text-white">{details.limits.supervisors}</span>
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      )}

      {tab === 'clientes' && (
        <div className="bg-black/40 backdrop-blur-3xl rounded-[4rem] p-12 border-[4px] border-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.2)]">
           <div className="flex justify-between items-center mb-16">
              <h3 className="text-2xl font-black text-white tracking-widest uppercase">Gestión de Clientes y Suscripciones</h3>
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                 <input type="text" placeholder="BUSCAR EMPRESA..." className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-[#22c55e]" />
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.4em] border-b border-white/10">
                    <tr>
                       <th className="px-8 py-6">CLIENTE</th>
                       <th className="px-8 py-6">PAQUETE ACTUAL</th>
                       <th className="px-8 py-6">MÓDULOS ACTIVOS</th>
                       <th className="px-8 py-6 text-right">ACCIONES</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {[1,2,3].map(i => (
                       <tr key={i} className="hover:bg-white/5 transition-all">
                          <td className="px-8 py-8 font-black text-white uppercase text-xs tracking-widest">Empresa {i} S.A. de C.V.</td>
                          <td className="px-8 py-8">
                             <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">GOLD PACK</span>
                             </div>
                          </td>
                          <td className="px-8 py-8">
                             <div className="flex gap-2">
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-[8px] font-black border border-purple-500/30">RESTAURANT</span>
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-[8px] font-black border border-purple-500/30">RRHH</span>
                             </div>
                          </td>
                          <td className="px-8 py-8 text-right">
                             <button className="px-6 py-2 border-2 border-[#22c55e] text-[#22c55e] rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#22c55e] hover:text-black transition-all">Modificar Plan</button>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ label, val, icon, color, trend, className }: any) => (
  <div className={`bg-black/40 border-[4px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.2)] p-10 rounded-[3rem] flex items-center justify-between group hover:scale-105 transition-all cursor-default relative overflow-hidden ${className}`}>
    <div className="relative z-10">
       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-3">{label}</p>
       <div className="flex items-end gap-3">
         <p className="text-4xl font-black text-white tracking-tighter">{val}</p>
         <span className="text-[9px] font-black text-[#22c55e] mb-2">{trend}</span>
       </div>
    </div>
    <div className="p-5 bg-white/5 rounded-3xl group-hover:bg-[#22c55e]/10 transition-all" style={{ color: color }}>
       {React.cloneElement(icon, { size: 32 })}
    </div>
  </div>
);

const ChartBox = ({ title, children, className }: any) => (
  <div className={`bg-black/40 backdrop-blur-3xl border-[4px] border-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.25)] rounded-[4rem] p-12 relative overflow-hidden ${className}`}>
     <h4 className="text-[11px] font-black text-white uppercase tracking-[0.8em] mb-12 flex items-center gap-4">
        <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
        {title}
     </h4>
     {children}
  </div>
);
