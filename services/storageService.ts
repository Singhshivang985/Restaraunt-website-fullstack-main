
import { Reservation } from '../types';

const RESERVATIONS_KEY = 'alimento_reservations';

export const storageService = {
  saveReservation: (reservation: Omit<Reservation, 'id' | 'status' | 'createdAt'>): Reservation => {
    const reservations = storageService.getReservations();
    const newReservation: Reservation = {
      ...reservation,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: Date.now()
    };
    
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify([...reservations, newReservation]));
    return newReservation;
  },

  getReservations: (): Reservation[] => {
    const data = localStorage.getItem(RESERVATIONS_KEY);
    return data ? JSON.parse(data) : [];
  },

  updateReservationStatus: (id: string, status: Reservation['status']): void => {
    const reservations = storageService.getReservations();
    const updated = reservations.map(res => 
      res.id === id ? { ...res, status } : res
    );
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(updated));
  },

  deleteReservation: (id: string): void => {
    const reservations = storageService.getReservations();
    const filtered = reservations.filter(res => res.id !== id);
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(filtered));
  }
};
