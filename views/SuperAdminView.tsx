
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart
} from 'recharts';
import { 
  Building2, 
  Plus, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ArrowUpRight,
  Clock,
  PhoneCall,
  Video,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';

export const SuperAdminView: React.FC = () => {
  const [tab, setTab] = useState<'kpis' | 'prospectos' | 'clientes'>('kpis');

  // Datos para las 6 gráficas
  const registrosData = [
    { name: 'Ene', val: 12 }, { name: 'Feb', val: 18 }, { name: 'Mar', val: 15 }, 
    { name: 'Abr', val: 25 }, { name: 'May', val: 32 }, { name: 'Jun', val: 45 }
  ];

  const ingresosData = [
    { name: 'Ene', income: 4500 }, { name: 'Feb', income: 5200 }, { name: 'Mar', income: 4800 }, 
    { name: 'Abr', income: 6100 }, { name: 'May', income: 7200 }, { name: 'Jun', income: 8500 }
  ];

  const planesData = [
    { name: 'Trial', value: 400 }, { name: 'Gold', value: 300 }, { name: 'Premium', value: 200 }, { name: 'Master', value: 100 }
  ];

  const radarData = [
    { subject: 'Uptime', A: 120, fullMark: 150 },
    { subject: 'Soporte', A: 98, fullMark: 150 },
    { subject: 'Ventas', A: 86, fullMark: 150 },
    { subject: 'Retención', A: 99, fullMark: 150 },
    { subject: 'Churn', A: 45, fullMark: 150 },
  ];

  const activityData = [
    { time: '08:00', users: 120 }, { time: '12:00', users: 450 }, { time: '16:00', users: 380 }, { time: '20:00', users: 210 }
  ];

  const conversionData = [
    { name: 'Prospectos', total: 1000, conv: 800 },
    { name: 'Trials', total: 500, conv: 300 },
    { name: 'Paid', total: 200, conv: 180 },
  ];

  const COLORS = ['#22c55e', '#a855f7', '#3b82f6', '#ffffff'];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Protocolo Global Super Admin</h2>
          <p className="text-[#22c55e] font-black text-[10px] uppercase tracking-[0.5em] mt-2">Maia Cloud Control</p>
        </div>
        <div className="flex bg-black/80 p-1.5 rounded-3xl border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-xl">
           <button onClick={() => setTab('kpis')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'kpis' ? 'bg-[#22c55e] text-black shadow-lg' : 'text-slate-400'}`}>Métricas</button>
           <button onClick={() => setTab('prospectos')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'prospectos' ? 'bg-[#22c55e] text-black shadow-lg' : 'text-slate-400'}`}>Prospectos</button>
           <button onClick={() => setTab('clientes')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'clientes' ? 'bg-[#22c55e] text-black shadow-lg' : 'text-slate-400'}`}>Clientes</button>
        </div>
      </div>

      {tab === 'kpis' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard label="PRUEBAS ACTIVAS" val="12" icon={<Activity />} color="#22c55e" />
            <StatCard label="PAQUETES GOLD" val="148" icon={<DollarSign />} color="#3b82f6" />
            <StatCard label="EMPRESAS MAIA" val="56" icon={<Building2 />} color="#a855f7" />
            <StatCard label="USUARIOS TOTAL" val="2.4k" icon={<Users />} color="#ffffff" />
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Gráfica 1: Crecimiento de Empresas */}
            <ChartContainer title="CRECIMIENTO DE EMPRESAS" className="col-span-12 lg:col-span-8">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={registrosData}>
                  <defs>
                    <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#64748b', fontSize:10, fontWeight:900}} />
                  <YAxis hide />
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                  <Area type="monotone" dataKey="val" stroke="#22c55e" strokeWidth={4} fillOpacity={1} fill="url(#colorReg)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>

            {/* Gráfica 2: Distribución de Planes */}
            <ChartContainer title="DISTRIBUCIÓN DE PLANES" className="col-span-12 lg:col-span-4">
              <div className="h-[300px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={planesData} innerRadius={60} outerRadius={90} paddingAngle={8} dataKey="value">
                      {planesData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="transparent" />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-3xl font-black text-white">100%</p>
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">ACTIVO</p>
                </div>
              </div>
            </ChartContainer>

            {/* Gráfica 3: Ingresos Globales */}
            <ChartContainer title="FLUJO DE INGRESOS ($)" className="col-span-12 lg:col-span-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ingresosData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#64748b', fontSize:10, fontWeight:900}} />
                  <YAxis hide />
                  <Tooltip cursor={{fill: 'rgba(255,255,255,0.03)'}} contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                  <Bar dataKey="income" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            {/* Gráfica 4: Salud del Ecosistema (Radar) */}
            <ChartContainer title="SALUD DEL ECOSISTEMA" className="col-span-12 lg:col-span-6">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#ffffff10" />
                  <PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 10, fontWeight: 900}} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} hide />
                  <Radar name="Meta" dataKey="A" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #a855f7', borderRadius:'16px'}} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>

            {/* Gráfica 5: Usuarios en Tiempo Real */}
            <ChartContainer title="ACTIVIDAD DE USUARIOS (24H)" className="col-span-12 lg:col-span-5">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={activityData}>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill:'#64748b', fontSize:10, fontWeight:900}} />
                  <YAxis hide />
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                  <Line type="stepAfter" dataKey="users" stroke="#ffffff" strokeWidth={3} dot={{ r: 4, fill: '#22c55e' }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            {/* Gráfica 6: Embudo de Conversión */}
            <ChartContainer title="EMBUDO DE CONVERSIÓN" className="col-span-12 lg:col-span-7">
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={conversionData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill:'#64748b', fontSize:10, fontWeight:900}} />
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                  <Bar dataKey="total" barSize={20} fill="#ffffff10" radius={[0, 10, 10, 0]} />
                  <Bar dataKey="conv" barSize={12} fill="#22c55e" radius={[0, 10, 10, 0]} />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </>
      )}

      {tab === 'prospectos' && (
        <div className="bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)]">
           <div className="flex justify-between items-center mb-12">
              <h3 className="text-xl font-black text-white tracking-widest uppercase">Gestión de Prospectos</h3>
              <button className="px-8 py-4 bg-[#22c55e] text-black rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_#22c55e]">
                 <Plus className="w-5 h-5" /> Nuevo Prospecto
              </button>
           </div>
           {/* Prospectos table content here (already existing in previous file, kept minimal for logic) */}
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.2em] border-b border-white/10">
                 <tr>
                   <th className="px-6 py-5">Empresa</th>
                   <th className="px-6 py-5">Status</th>
                   <th className="px-6 py-5">Acción</th>
                   <th className="px-6 py-5 text-right">Control</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {[1,2,3].map(i => (
                   <tr key={i} className="hover:bg-white/5 transition-colors">
                     <td className="px-6 py-6 font-black text-white uppercase text-xs tracking-widest">Prospecto Corp {i}</td>
                     <td className="px-6 py-6 text-xs font-black text-slate-500">PENDIENTE</td>
                     <td className="px-6 py-6 text-xs font-black text-indigo-400">LLAMADA MAÑANA</td>
                     <td className="px-6 py-6 text-right"><ChevronRight className="inline text-[#22c55e]" /></td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      )}

      {tab === 'clientes' && (
        <div className="bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)]">
           <h3 className="text-xl font-black text-white tracking-widest uppercase mb-12">Cartera de Clientes</h3>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.2em] border-b border-white/10">
                 <tr>
                   <th className="px-6 py-5">Empresa / ID</th>
                   <th className="px-6 py-5">Plan</th>
                   <th className="px-6 py-5 text-right">Efectividad</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {[1,2,3].map(i => (
                   <tr key={i} className="hover:bg-white/5 transition-colors">
                     <td className="px-6 py-6 font-black text-white uppercase text-xs tracking-widest">Empresa {i} S.A.</td>
                     <td className="px-6 py-6"><span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-[9px] font-black">MASTER</span></td>
                     <td className="px-6 py-6 text-right font-black text-[#22c55e]">98.5%</td>
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

const StatCard = ({ label, val, icon, color }: any) => (
  <div className="bg-black/40 border-[3px] border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.15)] p-8 rounded-[2.5rem] flex items-center justify-between group hover:scale-105 transition-all cursor-default">
    <div>
       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{label}</p>
       <p className="text-4xl font-black text-white tracking-tighter">{val}</p>
    </div>
    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#22c55e]/10 transition-colors" style={{ color: color }}>
       {React.cloneElement(icon, { size: 28 })}
    </div>
  </div>
);

const ChartContainer = ({ title, children, className }: any) => (
  <div className={`bg-black/40 backdrop-blur-3xl border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.2)] rounded-[3rem] p-10 ${className}`}>
     <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10 text-center">{title}</h4>
     {children}
  </div>
);

const StatusCounter = ({ label, count, color }: any) => (
  <div className="p-6 rounded-2xl bg-black border-[2px] border-white/5 flex justify-between items-center group hover:border-[#22c55e] transition-all">
     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white">{label}</p>
     <span className="text-2xl font-black text-white" style={{ color }}>{count}</span>
  </div>
);
