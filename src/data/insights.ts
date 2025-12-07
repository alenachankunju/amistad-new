export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content for simplicity in this phase
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
    keywords: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "future-of-steel-construction-qatar-2025",
        title: "The Future of Steel Construction in Qatar: Trends to Watch in 2025",
        excerpt: "From sustainable materials to modular construction, discover how Qatar's construction landscape is evolving with advanced steel technologies.",
        date: "2024-12-15",
        author: "Amistad Engineering Team",
        category: "Industry Trends",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        readTime: "5 min read",
        keywords: ["Steel Construction Qatar", "Sustainable Construction", "Modular Steel", "Qatar Vision 2030", "Construction Trends"],
        content: `
            <p class="lead">As Qatar continues its rapid development towards Vision 2030, the construction industry is undergoing a significant transformation. Structural steel, known for its versatility and speed of erection, is at the forefront of this evolution.</p>
            
            <h2>1. Sustainability and Green Steel</h2>
            <p>With a growing emphasis on environmental responsibility, the demand for sustainable building materials is at an all-time high. "Green steel," produced using low-carbon energy sources, is becoming a preferred choice for LEED-certified projects in Doha. At Amistad, we are actively sourcing materials that meet these rigorous environmental standards.</p>

            <h2>2. Modular and Off-Site Construction</h2>
            <p>Efficiency is key in Qatar's fast-paced market. Modular steel construction allows for significant portions of a structure to be fabricated off-site in controlled environments. This reduces waste, improves safety, and drastically cuts down on-site construction time. Our facility in the Industrial Area is equipped to handle large-scale modular fabrication.</p>

            <h2>3. Advanced BIM Integration</h2>
            <p>Building Information Modeling (BIM) is no longer a luxury; it's a necessity. The integration of 5D BIM allows for better cost estimation and schedule management. We utilize Tekla Structures to create digital twins of our steel frameworks, ensuring zero-clash installation and precise coordination with other trades.</p>

            <h2>4. High-Strength Steel Grades</h2>
            <p>Engineers are increasingly specifying higher strength steel grades like S460 to reduce the total weight of structures without compromising integrity. This allows for sleeker architectural designs and larger clear spans, perfect for the modern commercial towers rising in Lusail and West Bay.</p>

            <p><strong>Conclusion</strong></p>
            <p>The future of construction in Qatar is bright, efficient, and sustainable. By embracing these trends, Amistad Contracting and Services remains committed to delivering world-class engineering solutions that stand the test of time.</p>
        `
    },
    {
        slug: "safety-standards-heavy-lifting-rigging",
        title: "Safety Standards in Heavy Lifting & Rigging: A Guide for Project Managers",
        excerpt: "Ensuring zero-harm on site requires rigorous planning and adherence to international safety standards. Learn about the critical protocols for heavy lifts.",
        date: "2024-11-28",
        author: "Safety Department",
        category: "Safety & Compliance",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        readTime: "7 min read",
        keywords: ["Rigging Safety", "Crane Lifting Qatar", "Construction Safety", "HSE Standards", "Lifting Plan"],
        content: `
            <p class="lead">Heavy lifting operations are among the most critical and high-risk activities on any construction site. In Qatar, strict adherence to QCS 2014 and international standards like OSHA is mandatory to ensure the safety of personnel and assets.</p>

            <h2>The Importance of a Lift Plan</h2>
            <p>Every lift, no matter how routine, begins with a plan. A comprehensive Lift Plan must include:</p>
            <ul>
                <li><strong>Load Calculations:</strong> Exact weight, center of gravity, and dimensions.</li>
                <li><strong>Equipment Selection:</strong> Choosing the right crane and rigging gear (shackles, slings, spreader beams) for the load.</li>
                <li><strong>Ground Bearing Pressure:</strong> Ensuring the ground can support the outrigger loads.</li>
                <li><strong>Environmental Factors:</strong> Wind speed limits and weather conditions.</li>
            </ul>

            <h2>Role of the Appointed Person (AP)</h2>
            <p>The Appointed Person is responsible for the execution of the lifting operation. They must ensure that all personnel, including the Crane Operator and Slinger/Signaller, are certified and competent. At Amistad, our APs are fully trained to manage complex tandem lifts and critical lifts in congested areas.</p>

            <h2>Inspection and Maintenance</h2>
            <p>Rigging gear must be inspected before every use. Damaged slings or corroded shackles can lead to catastrophic failure. We implement a rigorous color-coding system for quarterly inspections to ensure all equipment on site is certified and safe for use.</p>

            <h2>Communication is Key</h2>
            <p>Clear communication between the operator and the rigger is vital. Whether using hand signals or two-way radios, the protocol must be established during the toolbox talk. There should be no ambiguity when tons of steel are suspended in the air.</p>

            <p><strong>Safety First, Always</strong></p>
            <p>At Amistad Contracting, we believe that no deadline is worth compromising safety. By following these standards, we ensure that every project is delivered safely and successfully.</p>
        `
    }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
