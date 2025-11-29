export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    shortDescription: string;
    image: string;
    stats: {
        label: string;
        value: string;
    }[];
    details: {
        client: string;
        location: string;
        duration: string;
        teamSize: string;
    };
    challenge: string;
    solution: string;
    gallery: string[];
    technologies: string[];
    results: {
        label: string;
        value: string;
    }[];
}

export const projects: Project[] = [
    {
        id: "skyline-plaza",
        title: "Skyline Plaza Framework",
        category: "Commercial",
        shortDescription: "Structural Steel • 450 Tonnes",
        description: "A landmark commercial development featuring complex structural steel framework for a 42-story mixed-use tower in the heart of the financial district.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        stats: [
            { label: "Steel Tonnage", value: "450T" },
            { label: "Floors", value: "42" },
            { label: "Height", value: "185m" },
        ],
        details: {
            client: "Skyline Developments Inc.",
            location: "New York, NY",
            duration: "18 months",
            teamSize: "45 personnel",
        },
        challenge: "The project required precision engineering to support asymmetric architectural features while maintaining structural integrity in a high-wind zone. Complex load transfer mechanisms were needed to accommodate large cantilevers and column-free spaces.",
        solution: "Our team developed a hybrid steel frame system using high-strength steel grades (S355 and S460) with advanced connection details. We implemented 3D BIM modeling for clash detection and utilized robotic welding for critical connections to ensure consistency and quality.",
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
        ],
        technologies: ["BIM/Tekla", "S355/S460 Steel", "Robotic Welding", "FEA Analysis"],
        results: [
            { label: "On-time Delivery", value: "100%" },
            { label: "Safety Record", value: "Zero incidents" },
            { label: "Cost Efficiency", value: "8% under budget" },
        ],
    },
    {
        id: "river-crossing",
        title: "River Crossing Access",
        category: "Infrastructure",
        shortDescription: "Civil Engineering • Maintenance",
        description: "Rehabilitation and strengthening of a critical river crossing bridge, ensuring continued service while upgrading to modern safety standards.",
        image: "https://images.unsplash.com/photo-1734888369524-bd915004d0c3?w=800&q=80",
        stats: [
            { label: "Span Length", value: "120m" },
            { label: "Load Capacity", value: "40T" },
            { label: "Service Life", value: "+50 years" },
        ],
        details: {
            client: "State Transportation Authority",
            location: "Hudson Valley, NY",
            duration: "12 months",
            teamSize: "28 personnel",
        },
        challenge: "The existing 60-year-old bridge required structural upgrades without complete closure, as it serves as a vital transportation link for the region. Corrosion damage and fatigue cracks needed addressing while maintaining traffic flow.",
        solution: "We implemented a phased rehabilitation approach using carbon fiber reinforcement and cathodic protection systems. Advanced NDT techniques identified critical areas, and we fabricated custom steel elements off-site for rapid installation during planned closures.",
        gallery: [
            "https://images.unsplash.com/photo-1558402347-1736bb7f512c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        ],
        technologies: ["Carbon Fiber", "NDT Inspection", "Cathodic Protection", "Phased Construction"],
        results: [
            { label: "Traffic Disruption", value: "Minimal" },
            { label: "Structural Upgrade", value: "150% capacity" },
            { label: "Warranty Period", value: "25 years" },
        ],
    },
    {
        id: "logistics-hub",
        title: "Logistics Hub Expansion",
        category: "Industrial",
        shortDescription: "Portal Frame • Cladding",
        description: "Design and construction of a 50,000 sq ft warehouse expansion featuring clear-span portal frames and advanced cladding systems for a major logistics operator.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
        stats: [
            { label: "Floor Area", value: "50,000 sq ft" },
            { label: "Clear Height", value: "12m" },
            { label: "Completion", value: "8 months" },
        ],
        details: {
            client: "Global Logistics Corp",
            location: "Newark, NJ",
            duration: "8 months",
            teamSize: "32 personnel",
        },
        challenge: "The client required maximum internal space with minimal columns to accommodate automated storage systems. The tight construction schedule demanded efficient fabrication and erection processes, while the facility needed to remain operational during construction.",
        solution: "We designed optimized portal frames with 40m clear spans using tapered sections to minimize material while maximizing strength. Pre-fabricated modules were assembled off-site and erected during weekend shutdowns, with insulated panel cladding installed concurrently.",
        gallery: [
            "https://images.unsplash.com/photo-1565610222536-ef125c59da2c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        ],
        technologies: ["Portal Frames", "Tapered Sections", "Insulated Panels", "Modular Construction"],
        results: [
            { label: "Project Timeline", value: "2 weeks early" },
            { label: "Operational Downtime", value: "Zero" },
            { label: "Energy Efficiency", value: "30% improvement" },
        ],
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
}
