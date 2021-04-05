export const UPCOMING_LAUNCHES_REQUEST_BODY = {
    query: {
        upcoming: true,
    },
    options: {
        limit: 50,
        sort: {
            flight_number: 'asc',
        },
        select: {
            _id: 1,
            name: 1,
            flight_number: 1,
            details: 1,
            date_unix: 1,
            date_precision: 1,
            tbd: 1,
            net: 1,
            rocket: 1,
            payloads: 1,
            launchpad: 1,
            'cores.flight': 1,
            'cores.landing_attempt': 1,
            'cores.landing_type': 1,
            'cores.landpad': 1,
        },
        populate: [
            {
                path: 'rocket',
                select: {
                    _id: 0,
                    name: 1,
                    stages: 1,
                    'height.meters': 1,
                    cost_per_launch: 1,
                    description: 1,
                },
            },
            {
                path: 'payloads',
                select: {
                    _id: 0,
                    name: 1,
                    type: 1,
                    customers: 1,
                    nationalities: 1,
                    manufacturers: 1,
                    mass_kg: 1,
                    orbit: 1,
                    regime: 1,
                },
            },
            {
                path: 'launchpad',
                select: {
                    _id: 0,
                    name: 1,
                    full_name: 1,
                    locality: 1,
                    region: 1,
                    details: 1,
                },
            },
            {
                path: 'cores.landpad',
                select: {
                    _id: 0,
                    name: 1,
                    full_name: 1,
                    locality: 1,
                    region: 1,
                    type: 1,
                },
            },
        ],
    },
};