export interface ILaunch {
    id: string;
    name: string;
    flight_number: number;
    details: string | null;
    date_unix: number;
    date_precision: 'quarter' | 'half' | 'year' | 'month' | 'day' | 'hour';
    tbd: boolean;
    net: boolean;
    rocket: IRocket;
    payloads: IPayload[];
    launchpad: ILaunchpad;
    cores: ICore[];
}

export interface IRocket {
    name: string;
    stages: number;
    height: { meters: number };
    cost_per_launch: number;
    description: string;
}

export interface IPayload {
    name: string;
    type: string;
    customers: string[];
    nationalities: string[];
    manufacturers: string[];
    mass_kg: number | null;
    orbit: string | null;
    regime: string | null;
}

export interface ILaunchpad {
    name: string;
    full_name: string;
    locality: string;
    region: string;
    details: string;
}

export interface ICore {
    flight: number | null;
    landing_attempt: boolean | null;
    landing_type: string | null;
    landpad: ILandpad | null;
}

export interface ILandpad {
    name: string;
    full_name: string;
    locality: string;
    region: string;
    type: string;
}
