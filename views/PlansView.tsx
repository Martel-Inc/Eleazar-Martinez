
import React from 'react';
import { PLAN_DETAILS, MASTER_MODULES } from '../constants';
import { Company, CompanyPlan } from '../types';
// Fix: Added missing icons (Users, Briefcase, ChevronRight) to the import list
import { 
  Check, 
  Zap, 
  Crown, 
  Star, 
  Package, 
  ShieldCheck, 
  Plus, 
  ShoppingCart,
  ArrowUpRight,
  Sparkles,
  Infinity,
  Users,
  Briefcase,
  ChevronRight
} from 'lucide-react';

export const PlansView: React.FC<{ company: Company, onUpgrade: (plan: CompanyPlan) => void }> = ({ company, onUpgrade }) => {
  
  const getModuleColor = (id: string) => {
    if (id.includes('restaurant')) return 'from-[#ff4d00] to-[#ff9500] shadow-[0_0_40px_rgba(255,77,0,0.4)]';
    if (id.includes('hotel')) return 'from-[#007aff] to-[#00c6ff] shadow-[0_0_40px_rgba(0,122,255,0.4)]';
    if (id.includes('rrhh')) return 'from-[#bf00ff] to-[#ff00ff] shadow-[0_0_40px_rgba(191,0,255,0.4)]';
    if (id.includes('bar')) return 'from-[#ffcc00] to-[#ff6600] shadow-[0_0_40px_rgba(255,204,0,0.4)]';
    if (id.includes('sales')) return 'from-[#34c759] to-[#00ffc3] shadow-[0_0_40px_rgba(52,199,89,0.4)]';
    if (id.includes('marketing')) return 'from-[#ff2d55] to-[#ff5e3a] shadow-[0_0_40px_rgba(255,45,85,0.4)]';
    if (id.includes('inventarios')) return 'from-[#5856d6] to-[#af52de] shadow-[0_0_40px_rgba(88,86,214,0.4)]';
    if (id.includes('retail')) return 'from-[#ff9500] to-[#ffcc00] shadow-[0_0_40px_rgba(255,149,0,0.4)]';
    if (id.includes('training')) return 'from-[#00c7be] to-[#50e3c2] shadow-[0_0_40px_rgba(0,199,190,0.4)]';
    return 'from-slate-500 to-slate-700 shadow-[0_0_40px_rgba(100,100,100,0.4)]';
  };

  return (
    <div className="space-y-24 animate-in fade-in duration-700 pb-32">
      {/* Header Sección */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-[#22c55e] animate-pulse" />
          <span className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.4em]">Ecosistema Maestro Activado</span>
        </div>
        <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
          ELEVA TU <span className="text-[#22c55e] drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">INFRAESTRUCTURA</span>
        </h2>
        <p className="text-slate-400 font-black text-xs uppercase tracking-[0.6em] max-w-2xl mx-auto leading-relaxed">
          Infraestructura tecnológica de grado industrial diseñada para dominar el mercado.
        </p>
      </div>

      {/* Grid de Planes Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {Object.entries(PLAN_DETAILS).map(([key, details]) => {
          const isCurrent = company.plan === key;
          const planColor = details.color;
          const isUnlimited = details.limits.supervisors > 9999;
          
          return (
            <div key={key} className={`relative group p-1 bg-gradient-to-b rounded-[3.5rem] transition-all duration-500 hover:scale-[1.05] hover:-translate-y-4 ${
              isCurrent ? 'from-[#22c55e] to-black shadow-[0_40px_100px_rgba(34,197,94,0.3)]' : 'from-white/10 to-transparent hover:from-white/30'
            }`}>
              <div className="h-full w-full bg-[#0d0d0d] rounded-[3.4rem] p-10 flex flex-col justify-between overflow-hidden relative border border-white/5">
                {/* Glow de fondo */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[100px] opacity-30" style={{ backgroundColor: planColor }} />
                
                <div className="relative z-10 text-center space-y-8">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:rotate-12 duration-500" style={{ color: planColor }}>
                      {key === 'TRIAL' && <ShieldCheck className="w-10 h-10" />}
                      {key === 'PREMIUM' && <Star className="w-10 h-10 shadow-[0_0_20px_rgba(34,197,94,0.5)]" />}
                      {key === 'GOLD' && <Zap className="w-10 h-10 shadow-[0_0_20px_rgba(234,179,8,0.5)]" />}
                      {key === 'MASTER' && <Crown className="w-10 h-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{details.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-black text-white tracking-tighter">${details.price}</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">/ Mes</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-4 text-left">
                       <Users className="w-4 h-4 text-slate-500" />
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          {isUnlimited ? 'EMPLEADOS ILIMITADOS' : `${details.limits.employees} EMPLEADOS`}
                       </span>
                    </div>
                    <div className="flex items-center gap-4 text-left">
                       <Briefcase className="w-4 h-4 text-slate-500" />
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          {isUnlimited ? 'SUPERVISORES ILIMITADOS' : `${details.limits.supervisors} SUPERVISORES`}
                       </span>
                    </div>
                    {details.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 text-left">
                        <Check className="w-4 h-4" style={{ color: planColor }} />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 relative z-10">
                  <button 
                    onClick={() => onUpgrade(key as CompanyPlan)}
                    disabled={isCurrent}
                    className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.6em] transition-all flex items-center justify-center gap-3 ${
                      isCurrent 
                      ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30' 
                      : 'bg-white text-black hover:bg-[#22c55e] hover:shadow-[0_0_30px_#22c55e]'
                    }`}
                  >
                    {isCurrent ? 'ACTIVO' : 'CONTRATAR'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sección Master Modules - El "Marketplace" */}
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b-2 border-white/10 pb-10">
          <div className="space-y-3">
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">
              MASTER <span className="text-[#a855f7] drop-shadow-[0_0_15px_#a855f7]">SOLUCIONES</span>
            </h3>
            <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.8em]">Módulos de especialización de alto rendimiento operativo</p>
          </div>
          <div className="flex items-center gap-4 px-8 py-4 bg-purple-500/10 border-2 border-purple-500/40 rounded-3xl shadow-[0_0_20px_rgba(168,85,247,0.1)]">
             <ShoppingCart className="w-5 h-5 text-purple-400" />
             <span className="text-xs font-black text-purple-300 uppercase tracking-widest">Módulos Activos: {company.modules.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {MASTER_MODULES.map((mod) => {
            const isInstalled = company.modules.includes(mod.id);
            const colorClass = getModuleColor(mod.id);
            
            return (
              <div 
                key={mod.id} 
                className={`group relative overflow-hidden rounded-[3rem] p-0.5 transition-all duration-500 hover:-translate-y-5 hover:scale-110 ${
                  isInstalled ? 'bg-gradient-to-br from-[#22c55e] to-emerald-900 shadow-[0_0_40px_rgba(34,197,94,0.3)]' : `bg-white/10 ${colorClass}`
                }`}
              >
                <div className="bg-[#0a0a0a] rounded-[2.9rem] p-8 h-full flex flex-col items-center text-center space-y-6 relative overflow-hidden border border-white/5">
                  <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${colorClass} p-5 text-white shadow-2xl flex items-center justify-center transition-transform group-hover:scale-125 group-hover:rotate-12`}>
                    {React.cloneElement(mod.icon as any, { size: 40, strokeWidth: 2.5 })}
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[11px] font-black text-white uppercase tracking-[0.15em] leading-tight opacity-80">{mod.name}</h4>
                    <p className="text-3xl font-black text-white tracking-tighter">${mod.price}</p>
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em]">POR MES</p>
                  </div>

                  <button 
                    className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                      isInstalled 
                      ? 'bg-[#22c55e] text-black shadow-[0_0_20px_#22c55e]' 
                      : 'bg-white text-black hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isInstalled ? <Check className="w-4 h-4 stroke-[4]" /> : <Plus className="w-4 h-4 stroke-[4]" />}
                    {isInstalled ? 'INSTALADO' : 'ADQUIRIR'}
                  </button>
                  
                  <div className="absolute top-4 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Venta */}
      <div className="relative group overflow-hidden bg-black rounded-[4rem] border-4 border-[#22c55e]/20 p-20 text-center space-y-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/10 via-transparent to-purple-500/10 opacity-50" />
        <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic relative z-10">TRANSFORMA TU <span className="text-[#22c55e] drop-shadow-[0_0_15px_#22c55e]">ORGANIZACIÓN</span></h3>
        <p className="text-slate-400 font-black text-xs uppercase tracking-[0.6em] max-w-xl mx-auto relative z-10">
          Arquitectura de software personalizada para líderes industriales.
        </p>
        <button className="relative z-10 px-20 py-7 bg-[#22c55e] text-black rounded-full font-black text-xs uppercase tracking-[1em] hover:shadow-[0_0_60px_#22c55e] transition-all flex items-center gap-6 mx-auto">
          SOLICITAR CONSULTORÍA <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
