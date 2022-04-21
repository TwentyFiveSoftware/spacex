export interface Launch {
    id: string;
    name: string;
    flight_number: number;
    details: string | null;
    date_unix: number;
    date_precision: 'quarter' | 'half' | 'year' | 'month' | 'day' | 'hour';
    links: {
        patch: {
            large: string;
        };
        flickr: {
            original: string[];
        };
        youtube_id: string;
    };
    rocket: Rocket;
    payloads: Payload[];
    launchpad: Launchpad;
    cores: Core[];
}

export interface Rocket {
    name: string;
    height: {
        meters: number;
    };
    diameter: {
        meters: number;
    };
    stages: number;
    boosters: number;
    cost_per_launch: number;
    engines: {
        number: number;
        type: string;
        layout: string;
        propellant_1: string;
        propellant_2: string;
    };
    flickr_images: string[];
}

export interface Payload {
    name: string;
    type: string;
    customers: string[];
    nationalities: string[];
    manufacturers: string[];
    mass_kg: number | null;
    orbit: string | null;
    regime: string | null;
}

export interface Launchpad {
    name: string;
    full_name: string;
    locality: string;
    region: string;
    timezone: string;
    images: {
        large: string[];
    };
}

export interface Core {
    flight: number | null;
    landing_attempt: boolean | null;
    landing_type: string | null;
    landpad: Landpad | null;
}

export interface Landpad {
    name: string;
    full_name: string;
    locality: string;
    region: string;
    type: string;
    images: {
        large: string[];
    };
}
