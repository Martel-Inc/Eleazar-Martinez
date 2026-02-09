
import React, { useState } from 'react';
import { 
  Utensils, 
  LayoutGrid, 
  ChefHat, 
  ClipboardCheck, 
  Box, 
  TrendingUp, 
  Users, 
  Clock,
  Plus,
  ArrowLeft,
  ChevronRight,
  Flame,
  Wine
} from 'lucide-react';

type RestaurantTab = 'piso' | 'cocina' | 'menu' | 'inventario' | 'reportes';

export const MasterRestaurantView: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<RestaurantTab>('piso');

  const stats = [
    { label: 'Mesas Activas', val: '18/24', icon: <LayoutGrid />, color: '#ff4d00' },
    { label: 'Órdenes en Cocina', val: '7', icon: <Flame />, color: '#ffcc00' },
    { label: 'Ticket Promedio', val: '$842', icon: <TrendingUp />, color: '#22c55e' },
    { label: 'Tiempo Prep.', val: '14 min', icon: <Clock />, color: '#3b82f6' },
  ];

  const tables = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    status: ['LIBRE', 'OCUPADA', 'RESERVADA', 'LIMPIEZA'][Math.floor(Math.random() * 4)],
    pax: Math.floor(Math.random() * 4) + 2,
    total: Math.floor(Math.random() * 2000) + 500
  }));

  return (
    <div className="space-y-10 animate-in fade-in zoom-in-95 duration-700 pb-20">
      {/* Header Master Restaurant */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b-2 border-[#ff4d00]/30 pb-10">
        <div className="flex items-center gap-6">
          <button 
            onClick={onExit}
            className="p-4 bg-black border-2 border-[#ff4d00] text-[#ff4d00] rounded-2xl hover:bg-[#ff4d00] hover:text-black transition-all shadow-[0_0_15px_rgba(255,77,0,0.3)]"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
              MASTER <span className="text-[#ff4d00]">RESTAURANT</span>
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="w-8 h-0.5 bg-[#ff4d00] rounded-full" />
              <p className="text-[#ff4d00] font-black text-[10px] uppercase tracking-[0.6em]">CONTROL OPERATIVO GASTRONÓMICO</p>
            </div>
          </div>
        </div>

        <div className="flex bg-black/80 p-1.5 rounded-3xl border-[3px] border-[#ff4d00]/40 backdrop-blur-xl">
           {[
             { id: 'piso', name: 'Piso', icon: <LayoutGrid size={14} /> },
             { id: 'cocina', name: 'Cocina', icon: <ChefHat size={14} /> },
             { id: 'menu', name: 'Menú', icon: <Utensils size={14} /> },
             { id: 'inventario', name: 'Stock', icon: <Box size={14} /> },
           ].map(t => (
             <button 
               key={t.id}
               onClick={() => setActiveTab(t.id as RestaurantTab)}
               className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all ${
                 activeTab === t.id ? 'bg-[#ff4d00] text-black shadow-[0_0_20px_rgba(255,77,0,0.4)]' : 'text-slate-400 hover:text-white'
               }`}
             >
               {t.icon} {t.name}
             </button>
           ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-black/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border-[3px] border-[#ff4d00]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between group hover:border-[#ff4d00]/50 transition-all">
             <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{s.label}</p>
                <p className="text-3xl font-black text-white tracking-tighter">{s.val}</p>
             </div>
             <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 group-hover:bg-[#ff4d00]/10 transition-all" style={{ color: s.color }}>
                {React.cloneElement(s.icon as any, { size: 24 })}
             </div>
          </div>
        ))}
      </div>

      {activeTab === 'piso' && (
        <div className="grid grid-cols-12 gap-10">
          {/* Mapa de Mesas */}
          <div className="col-span-12 lg:col-span-9 bg-black/40 backdrop-blur-3xl rounded-[4rem] border-[4px] border-[#ff4d00]/20 p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-12">
               <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-4">
                  <LayoutGrid className="text-[#ff4d00]" /> MAPA DE SALA PRINCIPAL
               </h3>
               <div className="flex gap-4">
                  <button className="px-6 py-3 bg-[#ff4d00] text-black rounded-xl font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(255,77,0,0.3)]">NUEVA COMANDA</button>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
               {tables.map(table => (
                 <div 
                   key={table.id} 
                   className={`relative aspect-square rounded-[2rem] border-[3px] flex flex-col items-center justify-center p-6 transition-all cursor-pointer group hover:scale-105 ${
                     table.status === 'LIBRE' ? 'border-[#22c55e]/20 bg-[#22c55e]/5' :
                     table.status === 'OCUPADA' ? 'border-[#ff4d00] bg-[#ff4d00]/10 shadow-[0_0_20px_rgba(255,77,0,0.2)]' :
                     table.status === 'RESERVADA' ? 'border-blue-500/40 bg-blue-500/5' :
                     'border-slate-500/20 bg-slate-500/5'
                   }`}
                 >
                    <span className="text-3xl font-black text-white mb-2">{table.id}</span>
                    <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      table.status === 'LIBRE' ? 'text-[#22c55e] border border-[#22c55e]/30' :
                      table.status === 'OCUPADA' ? 'text-[#ff4d00] border border-[#ff4d00]/30' :
                      'text-slate-400 border border-slate-500/30'
                    }`}>
                      {table.status}
                    </span>
                    {table.status === 'OCUPADA' && (
                      <div className="mt-4 text-center">
                        <p className="text-[10px] font-black text-white tracking-tighter">${table.total}</p>
                        <p className="text-[7px] font-black text-[#ff4d00] uppercase tracking-widest">{table.pax} PERSONAS</p>
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </div>

          {/* Lateral Piso */}
          <div className="col-span-12 lg:col-span-3 space-y-8">
             <div className="bg-black/60 backdrop-blur-3xl p-10 rounded-[3rem] border-[3px] border-[#ff4d00]/30 shadow-2xl">
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                   <Wine className="text-[#ff4d00]" /> TOP VENTAS HOY
                </h4>
                <div className="space-y-6">
                   {[
                     { name: 'Corte Ribeye 400g', sold: 42, color: '#ff4d00' },
                     { name: 'Pasta Carbonara', sold: 38, color: '#ffcc00' },
                     { name: 'Tarta de Queso', sold: 29, color: '#22c55e' },
                   ].map((item, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                           <span className="text-white">{item.name}</span>
                           <span className="text-[#ff4d00]">{item.sold}</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full rounded-full" style={{ width: `${(item.sold/50)*100}%`, backgroundColor: item.color }} />
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-gradient-to-br from-[#ff4d00] to-red-900 p-10 rounded-[3rem] text-black shadow-[0_0_30px_rgba(255,77,0,0.3)] flex flex-col items-center text-center space-y-6">
                <ChefHat size={48} className="text-black" />
                <h4 className="text-xl font-black uppercase tracking-tighter leading-none">PUESTO DE MANDO COCINA</h4>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">Órdenes críticas requieren atención inmediata</p>
                <button className="w-full py-4 bg-black text-[#ff4d00] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                   ABRIR MONITOR
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};
