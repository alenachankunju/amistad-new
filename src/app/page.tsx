"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageError, setImageError] = useState(false);

  // Hide the entire card if image fails to load
  if (imageError) {
    return null;
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group cursor-pointer reveal ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}
    >
      <div className="overflow-hidden rounded-lg mb-4 relative h-64">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
        <Image
          src={project.image}
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          alt={project.title}
          fill
          onError={() => setImageError(true)}
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-slate-900">{project.category}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{project.title}</h3>
      <p className="text-sm text-slate-500">{project.shortDescription}</p>
    </Link>
  );
}

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - known issue with this specific type definition
    if (typeof window !== "undefined" && window.lucide) {
      // @ts-expect-error - known issue with this specific type definition
      window.lucide.createIcons();
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <Image src="/amistad_logo.png" alt="Amistad Contracting and Services" width={150} height={40} className="h-10 w-auto transition-transform group-hover:scale-105 duration-300" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
            <a href="#home" className="hover:text-slate-900 transition-colors">Overview</a>
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#process" className="hover:text-slate-900 transition-colors">Process</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          </div>

          <div className="flex md:order-2 space-x-3">
            <a href="#contact" className="text-white bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-teal-200 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-all duration-300 shadow-lg shadow-teal-900/10 flex items-center gap-2">
              <span>Get a Quote</span>
              <i data-lucide="arrow-right" className="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* PAGE 1: HOME / HERO */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
        {/* Technical background elements */}
        <div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal active">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-medium uppercase tracking-wide mb-8">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Available for Q4 Projects
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
                Precision in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">Every Structure.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg font-normal leading-relaxed">
                Amistad Contracting and Services delivers comprehensive engineering solutions in Qatar. From precision design to expert execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 rounded-md transition-all duration-200 shadow-lg">
                  Explore Capabilities
                </a>
                <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-all duration-200">
                  View Portfolio
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-8 opacity-70">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/88/QatarEnergy_logo.svg" width={100} height={48} className="h-12 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity" alt="QatarEnergy" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Qatar_Rail_logo.svg" width={100} height={40} className="h-10 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity" alt="Qatar Rail" />
                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Qatar_foundation_logo.PNG" width={100} height={48} className="h-12 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity" alt="Qatar Foundation" />
              </div>
            </div>

            <div className="relative reveal delay-100 lg:h-[600px] w-full">
              {/* Composition of images for technical feel */}
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-slate-900 rounded-sm overflow-hidden shadow-2xl z-10">
                <Image src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop" fill className="object-cover opacity-90 hover:scale-105 transition-transform duration-700" alt="Steel Structure" />
                {/* Overlay Tech Data */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Project ID</div>
                      <div className="font-mono text-teal-500">SC-2025-884</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Load Capacity</div>
                      <div className="font-mono">4,500 PSI</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background geometric shape */}
              <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-slate-200 rounded-sm -z-0"></div>
              <div className="absolute bottom-12 left-12 p-4 bg-white shadow-xl border border-slate-100 rounded z-20 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 bg-teal-100 rounded text-teal-700"><i data-lucide="award" className="w-4 h-4"></i></div>
                  <span className="text-xs font-bold text-slate-900">ISO 9001:2015</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">Certified Quality Management System for Manufacture of Metal Structures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2: SERVICES DEEP DIVE */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-100">
            <div className="max-w-2xl">
              <span className="text-teal-700 font-semibold tracking-wider uppercase text-xs mb-3 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Technical Services</h2>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2">
                Download Full Service Catalog <i data-lucide="download" className="w-4 h-4"></i>
              </a>
            </div>
          </div>

          {/* Detailed Service 1: Design */}
          <div className="grid md:grid-cols-12 gap-12 mb-24 items-center reveal">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-square md:aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" fill className="object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" alt="CAD Design" />
                <div className="absolute inset-0 border border-black/5"></div>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 font-mono text-sm">01</div>
                <h3 className="text-2xl font-semibold text-slate-900">Consultation & CAD Design</h3>
              </div>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Before metal meets fire, our engineering team utilizes advanced BIM and CAD software to model every connection. We simulate stress loads to ensure structural integrity while optimizing material usage to reduce costs.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <i data-lucide="check-circle-2" className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"></i>
                  <div className="text-sm text-slate-600">
                    <strong className="block text-slate-900">Structural Analysis</strong>
                    <span className="text-slate-400">FEA stress testing</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i data-lucide="check-circle-2" className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"></i>
                  <div className="text-sm text-slate-600">
                    <strong className="block text-slate-900">3D Modelling</strong>
                    <span className="text-slate-400">Tekla & AutoCAD integration</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i data-lucide="check-circle-2" className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"></i>
                  <div className="text-sm text-slate-600">
                    <strong className="block text-slate-900">Material Selection</strong>
                    <span className="text-slate-400">Grade specific sourcing</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i data-lucide="check-circle-2" className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"></i>
                  <div className="text-sm text-slate-600">
                    <strong className="block text-slate-900">Regulatory Compliance</strong>
                    <span className="text-slate-400">Building code adherence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Service 2: Fabrication */}
          <div className="grid md:grid-cols-12 gap-12 mb-24 items-center reveal">
            <div className="md:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 font-mono text-sm">02</div>
                <h3 className="text-2xl font-semibold text-slate-900">Precision Fabrication</h3>
              </div>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Our 50,000 sq ft facility is equipped with the latest CNC machinery. We specialize in heavy structural steel, architectural metalwork, and custom aluminium fabrication.
              </p>

              {/* Technical Spec Table Lookalike */}
              <div className="border border-slate-200 rounded-sm overflow-hidden mb-8">
                <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  <div>Capability</div>
                  <div>Tolerance</div>
                  <div>Max Capacity</div>
                </div>
                <div className="grid grid-cols-3 p-3 text-sm text-slate-700 border-b border-slate-100">
                  <div className="font-medium">Laser Cutting</div>
                  <div className="font-mono text-slate-500">±0.1mm</div>
                  <div>25mm Plate</div>
                </div>
                <div className="grid grid-cols-3 p-3 text-sm text-slate-700 border-b border-slate-100">
                  <div className="font-medium">CNC Bending</div>
                  <div className="font-mono text-slate-500">±0.5°</div>
                  <div>300 Tonne</div>
                </div>
                <div className="grid grid-cols-3 p-3 text-sm text-slate-700">
                  <div className="font-medium">MIG/TIG Welding</div>
                  <div className="font-mono text-slate-500">ISO 3834</div>
                  <div>Unlimited</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-square md:aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" fill className="object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" alt="Welding" />
                <div className="absolute inset-0 border border-black/5"></div>
              </div>
            </div>
          </div>

          {/* Detailed Service 3: Installation */}
          <div className="grid md:grid-cols-12 gap-12 items-center reveal">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-square md:aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" fill className="object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" alt="Construction Site" />
                <div className="absolute inset-0 border border-black/5"></div>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 font-mono text-sm">03</div>
                <h3 className="text-2xl font-semibold text-slate-900">Site Installation & Rigging</h3>
              </div>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                We don&apos;t just build it; we erect it. Our certified rigging teams manage the logistics, crane lifts, and on-site assembly, ensuring safety and timeline adherence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center p-4 bg-slate-50 rounded border border-slate-100">
                  <i data-lucide="hard-hat" className="w-5 h-5 text-teal-500 mr-4"></i>
                  <span className="text-slate-700 font-medium">CSCS Certified Installers</span>
                </li>
                <li className="flex items-center p-4 bg-slate-50 rounded border border-slate-100">
                  <i data-lucide="truck" className="w-5 h-5 text-teal-500 mr-4"></i>
                  <span className="text-slate-700 font-medium">Logistics & Heavy Transport</span>
                </li>
                <li className="flex items-center p-4 bg-slate-50 rounded border border-slate-100">
                  <i data-lucide="shield-check" className="w-5 h-5 text-teal-500 mr-4"></i>
                  <span className="text-slate-700 font-medium">Full Site Safety Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 3: PROCESS VISUALIZATION */}
      <section id="process" className="py-24 bg-slate-900 text-white border-y border-slate-800 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">The Engineering Workflow</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A systematic approach to complex challenges.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-700 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="group bg-slate-900 p-6 border border-slate-800 hover:border-teal-500 transition-colors duration-300 rounded-lg">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300 shadow-lg shadow-black/20">
                  <i data-lucide="clipboard-list" className="w-6 h-6 text-white"></i>
                </div>
                <h4 className="text-lg font-medium mb-2">Specification</h4>
                <p className="text-sm text-slate-400">Detailed requirement analysis and site surveying.</p>
              </div>

              {/* Step 2 */}
              <div className="group bg-slate-900 p-6 border border-slate-800 hover:border-teal-500 transition-colors duration-300 rounded-lg">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300 shadow-lg shadow-black/20">
                  <i data-lucide="cpu" className="w-6 h-6 text-white"></i>
                </div>
                <h4 className="text-lg font-medium mb-2">Engineering</h4>
                <p className="text-sm text-slate-400">CAD modelling and structural calculations.</p>
              </div>

              {/* Step 3 */}
              <div className="group bg-slate-900 p-6 border border-slate-800 hover:border-teal-500 transition-colors duration-300 rounded-lg">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300 shadow-lg shadow-black/20">
                  <i data-lucide="anvil" className="w-6 h-6 text-white"></i>
                </div>
                <h4 className="text-lg font-medium mb-2">Manufacturing</h4>
                <p className="text-sm text-slate-400">Fabrication, welding, and quality assurance testing.</p>
              </div>

              {/* Step 4 */}
              <div className="group bg-slate-900 p-6 border border-slate-800 hover:border-teal-500 transition-colors duration-300 rounded-lg">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300 shadow-lg shadow-black/20">
                  <i data-lucide="building-2" className="w-6 h-6 text-white"></i>
                </div>
                <h4 className="text-lg font-medium mb-2">Handover</h4>
                <p className="text-sm text-slate-400">Delivery, installation, and final sign-off.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 4: PROJECTS / GALLERY */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Recent Projects</h2>
              <p className="text-slate-500">A selection of our architectural and industrial work.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="p-2 rounded border border-slate-200 hover:bg-white text-slate-600"><i data-lucide="chevron-left" className="w-5 h-5"></i></button>
              <button className="p-2 rounded border border-slate-200 hover:bg-white text-slate-600"><i data-lucide="chevron-right" className="w-5 h-5"></i></button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 5: CONTACT PAGE SIMULATION */}
      <section id="contact" className="py-0 bg-white border-t border-slate-200">
        <div className="flex flex-col lg:flex-row min-h-screen">

          {/* Contact Info Sidebar (Left) */}
          <div className="w-full lg:w-1/3 bg-slate-50 border-r border-slate-200 p-12 lg:p-20 flex flex-col justify-between">
            <div>
              <span className="text-teal-700 font-semibold tracking-wider uppercase text-xs mb-6 block">Get in Touch</span>
              <h2 className="text-4xl font-semibold text-slate-900 mb-8 tracking-tight">Let&apos;s build something together.</h2>
              <p className="text-slate-600 mb-12 leading-relaxed">
                Our engineering team is ready to discuss your project requirements. We typically respond within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                    <i data-lucide="map-pin" className="w-5 h-5 text-slate-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Office</h4>
                    <p className="text-slate-500 text-sm mt-1">Doha, Qatar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                    <i data-lucide="mail" className="w-5 h-5 text-slate-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Email</h4>
                    <p className="text-slate-500 text-sm mt-1"><a href="mailto:sales@amistadgeneral.net" className="hover:text-teal-600 transition-colors">sales@amistadgeneral.net</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                    <i data-lucide="phone" className="w-5 h-5 text-slate-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Phone</h4>
                    <p className="text-slate-500 text-sm mt-1">
                      <a href="tel:+97477070533" className="hover:text-teal-600 transition-colors">+974 77070533</a><br />
                      <a href="tel:+97477070544" className="hover:text-teal-600 transition-colors">+974 77070544</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-xs text-slate-400">Current Lead Time: <span className="text-green-600 font-medium">2-3 Weeks</span> for new consultations.</p>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="w-full lg:w-2/3 bg-white p-12 lg:p-24 flex items-center">
            <div className="w-full max-w-xl mx-auto reveal">
              <form action="#" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" id="first-name" className="block w-full rounded-md border-slate-200 shadow-sm focus:border-teal-500 focus:ring-teal-500/20 bg-slate-50 border px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none" placeholder="Jane" />
                  </div>
                  <div className="relative">
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" id="last-name" className="block w-full rounded-md border-slate-200 shadow-sm focus:border-teal-500 focus:ring-teal-500/20 bg-slate-50 border px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                  <input type="email" id="email" className="block w-full rounded-md border-slate-200 shadow-sm focus:border-teal-500 focus:ring-teal-500/20 bg-slate-50 border px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none" placeholder="jane@company.com" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                  <div className="relative">
                    <select id="service" className="block w-full appearance-none rounded-md border-slate-200 shadow-sm focus:border-teal-500 focus:ring-teal-500/20 bg-slate-50 border px-4 py-3 text-slate-900 transition-all outline-none">
                      <option>Structural Steel Fabrication</option>
                      <option>Architectural Metalwork</option>
                      <option>On-site Installation</option>
                      <option>Consulting / Design</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <i data-lucide="chevron-down" className="w-4 h-4"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                  <textarea id="message" rows={4} className="block w-full rounded-md border-slate-200 shadow-sm focus:border-teal-500 focus:ring-teal-500/20 bg-slate-50 border px-4 py-3 text-slate-900 placeholder-slate-400 transition-all outline-none" placeholder="Please describe your project scope, location, and timeline..."></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex h-6 items-center">
                    <input id="offers" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-700" />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-slate-700">Subscribe to newsletter</label>
                    <p className="text-slate-500">Get updates on our latest projects and industry news.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto flex justify-center items-center px-8 py-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="flex items-center space-x-2 mb-6">
                <Image src="/amistad_logo.png" alt="Amistad Contracting and Services" width={120} height={32} className="h-8 w-auto" />
              </a>
              <p className="text-sm text-slate-500 leading-relaxed">
                Amistad Contracting and Services - Excellence in engineering solutions since 2020. Based in Doha, Qatar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Sitemap</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Legal</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><i data-lucide="linkedin" className="w-5 h-5"></i></a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><i data-lucide="twitter" className="w-5 h-5"></i></a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><i data-lucide="instagram" className="w-5 h-5"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Amistad Contracting and Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
