
import React, { useState } from 'react';
import { ClipboardList, Plus, UserPlus, Search, Filter, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { TaskDefinition, TaskAssignment, TaskTypification } from '../types';

export const TaskView: React.FC = () => {
  const [view, setView] = useState<'definitions' | 'assignments'>('assignments');
  
  const mockDefinitions: TaskDefinition[] = [
    { id: '1', name: 'Limpieza Área A', description: 'Limpieza profunda de suelos y ventanas', departmentId: 'dep1', areaId: 'area1', estimatedTime: 45, qualityStandard: 'Sin manchas visibles, olor a pino' },
    { id: '2', name: 'Cierre de Caja', description: 'Corte de terminales y arqueo de efectivo', departmentId: 'dep1', areaId: 'area2', estimatedTime: 20, qualityStandard: 'Diferencia 0 pesos' },
  ];

  const mockAssignments: TaskAssignment[] = [
    // Fix: Using correct property names from TaskAssignment interface and providing required fields (taskId, assignedAt, startedAt, departmentId, areaId)
    { id: 'a1', taskId: '1', assignedToId: 'emp1', assignedById: 'admin', departmentId: 'dep1', areaId: 'area1', status: 'STARTED', assignedAt: '2023-10-27T09:00:00Z', startedAt: '2023-10-27T09:15:00Z' },
    // Fix: Using TaskTypification.COMPLETADA instead of non-existent ON_TIME_OK to match types.ts definition
    { id: 'a2', taskId: '2', assignedToId: 'emp2', assignedById: 'admin', departmentId: 'dep1', areaId: 'area2', status: 'COMPLETED', assignedAt: '2023-10-27T08:00:00Z', startedAt: '2023-10-27T08:05:00Z', completedAt: '2023-10-27T08:20:00Z', typification: TaskTypification.COMPLETADA, qualityScore: 100 },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Gestión de Tareas</h2>
          <p className="text-slate-500">Administra el ciclo de vida de las operaciones</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          <button 
            onClick={() => setView('assignments')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${view === 'assignments' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Asignaciones
          </button>
          <button 
            onClick={() => setView('definitions')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${view === 'definitions' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Catálogo (Alta)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><ClipboardList className="w-5 h-5"/></div>
          <div><p className="text-xs text-slate-400 font-bold">ASIGNADAS</p><p className="text-xl font-black">24</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center"><CheckCircle className="w-5 h-5"/></div>
          <div><p className="text-xs text-slate-400 font-bold">CONCLUIDAS</p><p className="text-xl font-black">18</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center"><Clock className="w-5 h-5"/></div>
          <div><p className="text-xs text-slate-400 font-bold">EN PROCESO</p><p className="text-xl font-black">4</p></div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center"><AlertCircle className="w-5 h-5"/></div>
          <div><p className="text-xs text-slate-400 font-bold">RETARDO</p><p className="text-xl font-black">2</p></div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Buscar..." className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 border-none" />
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700">
            {view === 'definitions' ? <Plus className="w-4 h-4"/> : <UserPlus className="w-4 h-4"/>}
            {view === 'definitions' ? 'Nueva Tarea Base' : 'Asignar Tarea'}
          </button>
        </div>

        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <tr>
              {view === 'definitions' ? (
                <>
                  <th className="px-6 py-4">Nombre</th>
                  <th className="px-6 py-4">Departamento/Área</th>
                  <th className="px-6 py-4">T. Estimado</th>
                  <th className="px-6 py-4">Estándar Calidad</th>
                  <th className="px-6 py-4"></th>
                </>
              ) : (
                <>
                  <th className="px-6 py-4">Tarea</th>
                  <th className="px-6 py-4">Asignado a</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4">Tipificación</th>
                  <th className="px-6 py-4">Calidad</th>
                  <th className="px-6 py-4"></th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {view === 'definitions' ? mockDefinitions.map(d => (
              <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-800">{d.name}</p>
                  <p className="text-xs text-slate-400 truncate max-w-xs">{d.description}</p>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 font-medium">{d.departmentId} / {d.areaId}</td>
                <td className="px-6 py-4 text-sm font-bold text-indigo-600">{d.estimatedTime} min</td>
                <td className="px-6 py-4 text-xs text-slate-500">{d.qualityStandard}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-300 hover:text-slate-600 font-bold text-xs uppercase">Editar</button>
                </td>
              </tr>
            )) : mockAssignments.map(a => (
              <tr key={a.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-800">Tarea #{a.taskId}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                    <span className="text-sm font-medium text-slate-600">{a.assignedToId}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-lg text-[10px] font-black ${
                    a.status === 'COMPLETED' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                  }`}>{a.status}</span>
                </td>
                <td className="px-6 py-4 text-xs font-bold text-slate-500">{a.typification || 'Pendiente'}</td>
                <td className="px-6 py-4">
                   {a.qualityScore ? (
                     <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="bg-emerald-500 h-full" style={{width: `${a.qualityScore}%`}}></div>
                     </div>
                   ) : '—'}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">Evaluar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
