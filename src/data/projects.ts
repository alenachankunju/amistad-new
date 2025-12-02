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
        id: "lusail-tower",
        title: "Lusail Tower Structural Framework",
        category: "Commercial",
        shortDescription: "Structural Steel • 520 Tonnes",
        description: "Completed structural steel framework for a 35-story luxury mixed-use tower in Lusail City, featuring complex architectural geometries and high-performance steel connections.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        stats: [
            { label: "Steel Tonnage", value: "520T" },
            { label: "Floors", value: "35" },
            { label: "Height", value: "142m" },
        ],
        details: {
            client: "Qatar Real Estate Development Company",
            location: "Lusail City, Qatar",
            duration: "16 months",
            teamSize: "48 personnel",
        },
        challenge: "The project required precision engineering to support asymmetric architectural features while maintaining structural integrity in Qatar's high-wind and high-temperature environment. Complex load transfer mechanisms were needed to accommodate large cantilevers and column-free spaces for luxury retail and office areas.",
        solution: "Our team developed a hybrid steel frame system using high-strength steel grades (S355 and S460) with advanced connection details certified for extreme weather conditions. We implemented 3D BIM modeling using Tekla Structures for clash detection and utilized robotic welding for critical connections to ensure consistency and quality. All steel was hot-dip galvanized for corrosion protection in the coastal environment.",
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
        ],
        technologies: ["BIM/Tekla Structures", "S355/S460 Steel", "Robotic Welding", "FEA Analysis", "Hot-Dip Galvanizing"],
        results: [
            { label: "On-time Delivery", value: "100%" },
            { label: "Safety Record", value: "Zero incidents" },
            { label: "Cost Efficiency", value: "12% under budget" },
        ],
    },
    {
        id: "doha-metro-station",
        title: "Doha Metro Station Canopy Structures",
        category: "Infrastructure",
        shortDescription: "Architectural Steelwork • 180 Tonnes",
        description: "Design, fabrication, and installation of iconic architectural steel canopy structures for multiple Doha Metro stations, completed as part of Qatar's national rail network expansion.",
        image: "https://images.unsplash.com/photo-1734888369524-bd915004d0c3?w=800&q=80",
        stats: [
            { label: "Steel Tonnage", value: "180T" },
            { label: "Stations", value: "4" },
            { label: "Completion", value: "14 months" },
        ],
        details: {
            client: "Qatar Rail",
            location: "Doha, Qatar",
            duration: "14 months",
            teamSize: "35 personnel",
        },
        challenge: "The project required fabrication of complex curved steel structures that would serve as iconic architectural elements while withstanding Qatar's extreme climate conditions. Each station canopy needed to be unique yet maintain design consistency. Installation had to be completed during limited night-time closures to avoid disrupting metro operations.",
        solution: "We utilized advanced CNC cutting and forming equipment to fabricate complex curved sections with precision tolerances. All steel was treated with specialized coatings for UV and heat resistance. We developed a modular assembly approach allowing pre-fabricated sections to be transported and erected efficiently during scheduled maintenance windows. Quality control included full-scale mock-ups and rigorous testing before final installation.",
        gallery: [
            "https://images.unsplash.com/photo-1558402347-1736bb7f512c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        ],
        technologies: ["CNC Fabrication", "Curved Steel Forming", "Specialized Coatings", "Modular Assembly", "Night Installation"],
        results: [
            { label: "Metro Disruption", value: "Zero" },
            { label: "Design Compliance", value: "100%" },
            { label: "Quality Rating", value: "Excellent" },
        ],
    },
    {
        id: "industrial-warehouse",
        title: "Industrial Warehouse Complex",
        category: "Industrial",
        shortDescription: "Portal Frame • 8,500 sqm",
        description: "Design and construction of a large-scale industrial warehouse facility in the Doha Industrial Area, featuring clear-span portal frames and advanced thermal insulation systems.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
        stats: [
            { label: "Floor Area", value: "8,500 sqm" },
            { label: "Clear Height", value: "14m" },
            { label: "Completion", value: "7 months" },
        ],
        details: {
            client: "Qatar Industrial Manufacturing Co.",
            location: "Doha Industrial Area, Qatar",
            duration: "7 months",
            teamSize: "38 personnel",
        },
        challenge: "The client required maximum internal space with minimal columns to accommodate automated material handling systems and large equipment. The facility needed to maintain controlled temperatures despite Qatar's extreme heat, while the tight construction schedule demanded efficient fabrication and erection processes. The site remained operational during construction, requiring careful coordination.",
        solution: "We designed optimized portal frames with 45m clear spans using tapered sections to minimize material while maximizing strength. Pre-fabricated modules were assembled in our facility and erected during planned shutdowns. We installed advanced insulated panel cladding systems with thermal breaks to achieve energy efficiency. All structural elements were designed to accommodate future expansion requirements.",
        gallery: [
            "https://images.unsplash.com/photo-1565610222536-ef125c59da2c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        ],
        technologies: ["Portal Frames", "Tapered Sections", "Insulated Panels", "Modular Construction", "Thermal Insulation"],
        results: [
            { label: "Project Timeline", value: "3 weeks early" },
            { label: "Operational Downtime", value: "Zero" },
            { label: "Energy Efficiency", value: "35% improvement" },
        ],
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
}
