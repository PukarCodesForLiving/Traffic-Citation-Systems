export interface Vehicle {
  licensePlate: string;
  registrationStatus: 'VALID' | 'EXPIRED' | 'SUSPENDED';
  isStolen: boolean;
  warrants: Warrant[];
  make: string;
  model: string;
  year: number;
  outstandingTickets: Citation[];
}

export interface Driver {
  licenseNumber: string;
  firstName: string;
  lastName: string;
  licenseStatus: 'VALID' | 'SUSPENDED' | 'REVOKED';
  warrants: Warrant[];
  citations: Citation[];
}

export interface Citation {
  id: string;
  type: 'PARKING' | 'MOVING' | 'WARNING' | 'FIX_IT';
  issuedAt: Date;
  officerId: string;
  violationCode: string;
  description: string;
  fine: number;
  status: 'PENDING' | 'PAID' | 'TRAFFIC_SCHOOL' | 'WARRANT_ISSUED';
  vehicleId?: string;
  driverId?: string;
}

export interface Warrant {
  id: string;
  type: 'UNPAID_CITATION' | 'CRIMINAL' | 'STOLEN_VEHICLE';
  issuedAt: Date;
  description: string;
  status: 'ACTIVE' | 'RESOLVED';
}

export interface TrafficSchoolSession {
  id: string;
  schedule: {
    startDate: Date;
    endDate: Date;
    type: 'FULL_DAY' | 'EVENING';
  }[];
  capacity: number;
  enrolled: number;
  status: 'UPCOMING' | 'IN_PROGRESS' | 'COMPLETED';
}