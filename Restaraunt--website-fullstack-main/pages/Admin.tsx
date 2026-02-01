
import React, { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';
import { Reservation } from '../types';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filter, setFilter] = useState<Reservation['status'] | 'all'>('all');

  useEffect(() => {
    if (isAuthenticated) {
      loadReservations();
    }
  }, [isAuthenticated]);

  const loadReservations = () => {
    const data = storageService.getReservations();
    setReservations(data.sort((a, b) => b.createdAt - a.createdAt));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Try "admin123"');
    }
  };

  const handleUpdateStatus = (id: string, status: Reservation['status']) => {
    storageService.updateReservationStatus(id, status);
    loadReservations();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      storageService.deleteReservation(id);
      loadReservations();
    }
  };

  const filteredReservations = filter === 'all' 
    ? reservations 
    : reservations.filter(res => res.status === filter);

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center min-h-screen bg-stone-100">
        <div className="bg-white p-12 shadow-xl max-w-md w-full text-center">
          <h1 className="text-3xl font-serif font-bold mb-8 text-stone-900 uppercase tracking-widest">Admin Portal</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Access Key</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700 transition-colors text-center"
              />
            </div>
            <button className="w-full py-4 bg-stone-900 text-white font-bold uppercase tracking-widest hover:bg-black transition-colors">
              Login
            </button>
            <p className="text-xs text-stone-400">Demo password: admin123</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">Admin Dashboard</h1>
            <p className="text-stone-500">Manage all incoming guest reservations</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="px-6 py-2 border border-stone-300 text-stone-600 hover:bg-stone-100 transition-colors uppercase text-xs font-bold tracking-widest"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {(['all', 'pending', 'confirmed', 'cancelled'] as const).map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm whitespace-nowrap ${
                filter === s ? 'bg-amber-800 text-white' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Reservations Table */}
        <div className="bg-white shadow-sm overflow-hidden border border-stone-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Guest</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Details</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-stone-500 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stone-200">
                {filteredReservations.map((res) => (
                  <tr key={res.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="font-bold text-stone-900">{res.name}</div>
                      <div className="text-xs text-stone-500">{res.email}</div>
                      <div className="text-xs text-stone-500">{res.phone}</div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="text-sm text-stone-900 font-medium">{new Date(res.date).toLocaleDateString()} at {res.time}</div>
                      <div className="text-xs text-stone-500">{res.guests} Guests</div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
                        res.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        res.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {res.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-right text-xs">
                      <div className="flex justify-end gap-2">
                        {res.status === 'pending' && (
                          <button 
                            onClick={() => handleUpdateStatus(res.id, 'confirmed')}
                            className="text-green-600 hover:text-green-800 font-bold uppercase tracking-tighter"
                          >
                            Confirm
                          </button>
                        )}
                        {res.status !== 'cancelled' && (
                          <button 
                            onClick={() => handleUpdateStatus(res.id, 'cancelled')}
                            className="text-amber-600 hover:text-amber-800 font-bold uppercase tracking-tighter"
                          >
                            Cancel
                          </button>
                        )}
                        <button 
                          onClick={() => handleDelete(res.id)}
                          className="text-red-500 hover:text-red-700 font-bold uppercase tracking-tighter ml-4"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredReservations.length === 0 && (
            <div className="text-center py-20 text-stone-400 bg-stone-50">
              No reservations found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
