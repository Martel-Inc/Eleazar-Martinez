
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell,
  AreaChart, Area, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart
} from 'recharts';
import { Company, UserRole } from '../types';
import { TrendingUp, Activity, Target, Zap, Award } from 'lucide-react';

export const DashboardView: React.FC<{ company: Company, role: UserRole }> = ({ company, role }) => {
  const lineData = [
    { name: 'Lun', val: 1200, ef: 85 }, { name: 'Mar', val: 2100, ef: 92 }, { name: 'Mie', val: 1800, ef: 88 }, 
    { name: 'Jue', val: 2400, ef: 95 }, { name: 'Vie', val: 2200, ef: 90 }, { name: 'Sab', val: 3000, ef: 98 }, { name: 'Dom', val: 2800, ef: 94 }
  ];

  const pieData = [
    { name: 'Ventas', value: 400 }, { name: 'Sistemas', value: 300 }, { name: 'Cocina', value: 300 }, { name: 'Admin', value: 200 }
  ];

  const radarData = [
    { subject: 'Calidad', A: 120, fullMark: 150 },
    { subject: 'Tiempo', A: 98, fullMark: 150 },
    { subject: 'Asistencia', A: 86, fullMark: 150 },
    { subject: 'Liderazgo', A: 99, fullMark: 150 },
    { subject: 'Ventas', A: 85, fullMark: 150 },
    { subject: 'Orden', A: 65, fullMark: 150 },
  ];

  const shiftData = [
    { name: 'Mñn', tareas: 400, completas: 380, pct: 95 },
    { name: 'Tde', tareas: 300, completas: 250, pct: 83 },
    { name: 'Nch', tareas: 200, completas: 180, pct: 90 },
  ];

  const COLORS = ['#22c55e', '#a855f7', '#3b82f6', '#ffffff'];

  return (
    <div className="grid grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-800 pb-20">
      
      {/* Welcome Hero */}
      <div className="col-span-12 lg:col-span-8 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10 relative overflow-hidden flex flex-col justify-between h-[340px]">
        <div className="relative z-10 flex items-center gap-6 mb-10">
           <div className="w-16 h-16 rounded-3xl border-[3px] border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.4)] overflow-hidden bg-black p-1">
             <img src={`https://i.pravatar.cc/150?u=${role}`} alt="User" className="w-full h-full object-cover rounded-2xl" />
           </div>
           <div>
             <p className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.6em] leading-none mb-2">Protocolo Iniciado</p>
             <h2 className="text-4xl font-black text-white tracking-tighter">Hola, Master Admin</h2>
           </div>
        </div>
        <div className="flex gap-20 relative z-10">
           <div>
              <p className="text-3xl font-black text-white">$65.4K</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-2 flex items-center gap-3">VENTAS HOY <span className="w-4 h-0.5 bg-[#22c55e] rounded-full" /></p>
           </div>
           <div>
              <p className="text-3xl font-black text-white">78.4%</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-2 flex items-center gap-3">RENDIMIENTO <span className="w-4 h-0.5 bg-purple-500 rounded-full" /></p>
           </div>
        </div>
      </div>

      {/* Stats Cluster */}
      <div className="col-span-12 md:col-span-6 lg:col-span-2 space-y-8">
        <SmallCard label="ACTIVOS" val="42.5K" pct={78} color="#22c55e" />
        <SmallCard label="VENTAS" val="82.7K" pct={65} color="#3b82f6" />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-2 space-y-8">
        <SmallCard label="TRAFICO" val="97.4K" spark data={lineData} color="#a855f7" />
        <SmallCard label="VISITAS" val="48.4K" spark data={lineData} color="#ffffff" />
      </div>

      {/* Row 2: Flow & Effectiveness */}
      <div className="col-span-12 lg:col-span-6 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10">
         <div className="flex justify-between items-center mb-10">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.5em]">ANÁLISIS DE FLUJO</h3>
            <span className="text-[9px] font-black text-[#22c55e] uppercase tracking-widest border border-[#22c55e]/30 px-3 py-1 rounded-lg">EN TIEMPO REAL</span>
         </div>
         <div className="h-[280px]">
           <ResponsiveContainer width="100%" height="100%">
              <BarChart data={lineData.map(d => ({ ...d, val: d.val / 100 }))}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize:10, fontWeight:900, fill:'#64748b'}} />
                <YAxis hide />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.03)'}} contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px', boxShadow: '0 0 20px rgba(34,197,94,0.3)'}} />
                <Bar dataKey="val" fill="#22c55e" radius={[6, 6, 0, 0]} barSize={34} />
              </BarChart>
           </ResponsiveContainer>
         </div>
      </div>

      <div className="col-span-12 lg:col-span-6 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10">
         <div className="flex justify-between items-center mb-10">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.5em]">EFECTIVIDAD TEMPORAL</h3>
            <span className="text-[9px] font-black text-purple-400 uppercase tracking-widest border border-purple-400/30 px-3 py-1 rounded-lg">INDICADOR CORE</span>
         </div>
         <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={lineData}>
                  <defs>
                     <linearGradient id="colorEf" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                     </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize:10, fontWeight:900, fill:'#64748b'}} />
                  <YAxis domain={[0, 100]} hide />
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                  <Area type="monotone" dataKey="ef" stroke="#22c55e" strokeWidth={4} fillOpacity={1} fill="url(#colorEf)" />
               </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>

      {/* Row 3: Distribution, Performance & Productivity */}
      <div className="col-span-12 lg:col-span-4 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10">
         <h3 className="text-xs font-black text-white uppercase tracking-[0.5em] mb-10 text-center">DISTRIBUCIÓN MAIA</h3>
         <div className="h-[280px] relative">
            <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie data={pieData} innerRadius={80} outerRadius={105} paddingAngle={10} dataKey="value">
                   {pieData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="transparent" />
                   ))}
                 </Pie>
                 <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
               </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <p className="text-4xl font-black text-white">68%</p>
               <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mt-1">TOTAL</p>
            </div>
         </div>
      </div>

      <div className="col-span-12 lg:col-span-4 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10">
         <h3 className="text-xs font-black text-white uppercase tracking-[0.5em] mb-10 text-center">DESEMPEÑO MAESTRO</h3>
         <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#ffffff10" />
                  <PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 10, fontWeight: 900}} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} hide />
                  <Radar name="Meta" dataKey="A" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
               </RadarChart>
            </ResponsiveContainer>
         </div>
      </div>

      <div className="col-span-12 lg:col-span-4 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/40 backdrop-blur-3xl rounded-[3rem] p-10">
         <h3 className="text-xs font-black text-white uppercase tracking-[0.5em] mb-10 text-center">PRODUCTIVIDAD / TURNO</h3>
         <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
               <ComposedChart data={shiftData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize:10, fontWeight:900, fill:'#64748b'}} />
                  <YAxis hide />
                  <Tooltip contentStyle={{backgroundColor: '#000', border:'2px solid #22c55e', borderRadius:'16px'}} />
                  <Bar dataKey="tareas" barSize={20} fill="#ffffff20" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completas" barSize={12} fill="#22c55e" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="pct" stroke="#a855f7" strokeWidth={4} dot={{ r: 4, fill: '#a855f7' }} />
               </ComposedChart>
            </ResponsiveContainer>
         </div>
      </div>

    </div>
  );
};

const SmallCard = ({ label, val, pct, spark, data, color }: any) => (
  <div className="border-[3px] border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.2)] bg-black/40 backdrop-blur-3xl p-6 rounded-[2.5rem] h-[156px] relative flex flex-col justify-between overflow-hidden group hover:scale-105 transition-all">
     <div className="flex justify-between items-start relative z-10">
        <div>
           <p className="text-xl font-black text-white tracking-tighter">{val}</p>
           <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mt-1.5">{label}</p>
        </div>
        <div className="p-2 bg-white/5 rounded-xl text-slate-500 group-hover:text-white transition-colors">
           <Activity size={12} />
        </div>
     </div>
     
     <div className="relative z-10">
        {spark ? (
           <div className="h-12 w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={data}>
                    <Line type="monotone" dataKey="val" stroke={color} strokeWidth={4} dot={false} />
                 </LineChart>
              </ResponsiveContainer>
           </div>
        ) : (
           <div className="space-y-3">
              <div className="flex justify-between items-center text-[9px] font-black text-slate-500">
                 <span className="flex items-center gap-1.5 uppercase tracking-widest text-[#22c55e]"><TrendingUp size={10} /> +{pct}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
              </div>
           </div>
        )}
     </div>
  </div>
);
