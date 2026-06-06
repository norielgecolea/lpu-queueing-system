export type ServiceType = 'cashier' | 'registrar';

export type TicketStatus = 'waiting' | 'serving' | 'completed' | 'skipped';

export interface Ticket {
  id: string;
  number: string; // e.g. "C-001" / "R-014"
  serviceType: ServiceType;
  name: string;
  studentId: string;
  request: string;
  status: TicketStatus;
  windowId: string | null; // window currently/last serving it
  createdAt: number;
  calledAt: number | null;
}

export interface ServiceWindow {
  id: string;
  label: string; // e.g. "Window 1"
  serviceType: ServiceType;
  currentTicketId: string | null;
  lastTicketId: string | null; // last completed at this window (for recall-last)
  announceTick: number; // bumped to (re)trigger display flash + voice
}

export interface QueueState {
  tickets: Ticket[];
  windows: ServiceWindow[];
  counters: Record<ServiceType, number>;
}

export const SERVICE_LABEL: Record<ServiceType, string> = {
  cashier: 'Cashier',
  registrar: 'Registrar',
};

export const SERVICE_PREFIX: Record<ServiceType, string> = {
  cashier: 'C',
  registrar: 'R',
};

export const REQUESTS: Record<ServiceType, string[]> = {
  cashier: [
    'Tuition Payment',
    'Miscellaneous Fee',
    'Exam Permit',
    'Refund / Adjustment',
    'Other Payment',
  ],
  registrar: [
    'Transcript of Records',
    'Certificate of Enrollment',
    'Good Moral Certificate',
    'Diploma / Credentials',
    'Add / Drop Subject',
    'Other Request',
  ],
};

export function initialState(): QueueState {
  return {
    tickets: [],
    counters: { cashier: 0, registrar: 0 },
    windows: [
      { id: 'cashier-1', label: 'Window 1', serviceType: 'cashier', currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: 'cashier-2', label: 'Window 2', serviceType: 'cashier', currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: 'cashier-3', label: 'Window 3', serviceType: 'cashier', currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: 'cashier-4', label: 'Window 4', serviceType: 'cashier', currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: 'registrar-1', label: 'Window 1', serviceType: 'registrar', currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: 'registrar-2', label: 'Window 2', serviceType: 'registrar', currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: 'registrar-3', label: 'Window 3', serviceType: 'registrar', currentTicketId: null, lastTicketId: null, announceTick: 0 },
      { id: 'registrar-4', label: 'Window 4', serviceType: 'registrar', currentTicketId: null, lastTicketId: null, announceTick: 0 },
    ],
  };
}
