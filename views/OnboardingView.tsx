
import React, { useState } from 'react';
import { Company, UserRole } from '../types';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Plus
} from 'lucide-react';

export const OnboardingView: React.FC<{ company: Company, onComplete: (c: Company) => void }> = ({ company, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(company);

  const steps = [
    { n: 1, title: 'Generales Empresa', icon: <Building2 className="w-5 h-5"/> },
    { n: 2, title: 'Departamentos', icon: <ChevronRight className="w-5 h-5"/> },
    { n: 3, title: 'Áreas & Personal', icon: <Plus className="w-5 h-5"/> },
    { n: 4, title: 'Configurar Tareas', icon: <CheckCircle2 className="w-5 h-5"/> },
  ];

  const handleNext = () => step < 4 ? setStep(step + 1) : onComplete(formData);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8 overflow-y-auto">
      <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Progress Sidebar */}
        <div className="w-full md:w-80 bg-slate-900 p-10 flex flex-col justify-between border-r border-slate-800">
          <div>
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black italic mb-10 shadow-xl shadow-indigo-900/40">MC</div>
            <h2 className="text-2xl font-black text-white tracking-tighter mb-8">Onboarding Maia</h2>
            <div className="space-y-6">
              {steps.map(s => (
                <div key={s.n} className={`flex items-center gap-4 transition-all ${step === s.n ? 'opacity-100 translate-x-2' : 'opacity-40'}`}>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${step >= s.n ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {s.n}
                  </div>
                  <span className="text-sm font-bold text-white uppercase tracking-widest">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 p-6 bg-slate-800/50 rounded-3xl border border-slate-700/50">
            <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-widest">Master Control Core</p>
            <p className="text-[10px] text-slate-500 mt-2">La estructura de departamentos, áreas y personal es obligatoria para el funcionamiento de los KPI.</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-12 flex flex-col justify-between">
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Generales de la Empresa</h3>
                  <p className="text-slate-500 font-medium">Define la identidad de tu operación en el sistema.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input icon={<Building2 className="w-4 h-4"/>} label="Nombre de Empresa" placeholder="Master Restaurant" value={formData.name} />
                  <Input icon={<MapPin className="w-4 h-4"/>} label="Dirección" placeholder="Av. Siempre Viva 123" value={formData.address} />
                  <Input icon={<Phone className="w-4 h-4"/>} label="Teléfono" placeholder="55 1234 5678" value={formData.phone} />
                  <Input icon={<Mail className="w-4 h-4"/>} label="Email de contacto" placeholder="admin@maia.com" value={formData.email} />
                  <Input icon={<Clock className="w-4 h-4"/>} label="Horario de Operación" placeholder="09:00 - 18:00" value={formData.schedule} />
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Giro de Empresa</label>
                    <select className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Restaurante / Bar</option>
                      <option>Hotelería</option>
                      <option>Servicios Profesionales</option>
                      <option>Retail</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Departamentos</h3>
                  <p className="text-slate-500 font-medium">Crea los pilares de tu estructura organizacional.</p>
                </div>
                <div className="space-y-3">
                  {['Sistemas', 'Operación', 'Marketing', 'Finanzas'].map((d, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="font-bold text-slate-700">{d}</span>
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                  ))}
                  <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-400 font-bold hover:bg-slate-50 transition-colors">
                    <Plus className="w-5 h-5" /> Agregar Departamento
                  </button>
                </div>
              </div>
            )}

            {step > 2 && (
               <div className="h-64 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-indigo-600 mb-4 animate-bounce" />
                  <h4 className="text-xl font-black text-slate-900">¡Configuración en curso!</h4>
                  <p className="text-slate-500 max-w-xs mx-auto">Estamos preparando las áreas y el personal para que el sistema esté 100% funcional.</p>
               </div>
            )}
          </div>

          <div className="mt-12 flex justify-between gap-4">
            <button 
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="px-6 py-4 border-2 border-slate-100 text-slate-400 rounded-2xl font-black flex items-center gap-2 hover:bg-slate-50 disabled:opacity-0 transition-all"
            >
              <ChevronLeft className="w-5 h-5" /> ANTERIOR
            </button>
            <button 
              onClick={handleNext}
              className="flex-1 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all"
            >
              {step === 4 ? 'FINALIZAR CONFIGURACIÓN' : 'CONTINUAR'} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, placeholder, icon, value }: any) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>
      <input 
        type="text" 
        defaultValue={value}
        placeholder={placeholder} 
        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
      />
    </div>
  </div>
);
