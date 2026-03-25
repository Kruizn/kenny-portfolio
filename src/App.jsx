import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Mail, ChevronDown, ExternalLink, FileText, Workflow, Briefcase, ArrowRight } from 'lucide-react';
import mermaid from 'mermaid';

// Initialize mermaid with light theme
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#1e3a5f',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#2d4a6f',
    lineColor: '#1e3a5f',
    secondaryColor: '#f8fafc',
    tertiaryColor: '#e2e8f0',
    background: '#ffffff',
    mainBkg: '#1e3a5f',
    nodeBorder: '#2d4a6f',
    clusterBkg: '#f1f5f9',
    edgeLabelBackground: '#ffffff',
    fontFamily: 'Source Sans 3, system-ui, sans-serif',
  },
  flowchart: {
    curve: 'basis',
    padding: 20,
  },
});

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display text-xl text-navy-800 hover:text-navy-600 transition-colors">
          KR
        </a>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-slate-600 hover:text-navy-700 transition-colors text-sm tracking-wide">About</a>
          <a href="#writing" className="text-slate-600 hover:text-navy-700 transition-colors text-sm tracking-wide">Writing</a>
          <a href="#process" className="text-slate-600 hover:text-navy-700 transition-colors text-sm tracking-wide">Process</a>
          <a href="#skills" className="text-slate-600 hover:text-navy-700 transition-colors text-sm tracking-wide">Skills</a>
          <a 
            href="https://www.linkedin.com/in/kennyruiz100507/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white px-4 py-2 rounded transition-all"
          >
            <Linkedin size={16} />
            <span className="text-sm">Connect</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text content */}
        <div className="order-2 lg:order-1">
          <div className="inline-block mb-6 opacity-0 animate-fade-in stagger-1">
            <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium bg-navy-100 px-3 py-1.5 rounded">
              Strategic Operations Leader
            </span>
          </div>
          
          <h1 className="font-display text-5xl lg:text-6xl text-navy-900 mb-6 leading-tight opacity-0 animate-slide-up stagger-2">
            Kenny Ruiz
          </h1>
          
          <p className="text-xl text-slate-600 mb-4 leading-relaxed opacity-0 animate-slide-up stagger-3">
            Operations Leadership · Utilization Management · Process Architecture
          </p>
          
          <p className="text-slate-500 mb-8 leading-relaxed max-w-lg opacity-0 animate-slide-up stagger-4">
            I build systems that scale. Specializing in healthcare operations, 
            I translate regulatory complexity into executable workflows — 
            with audit defensibility, automation, and efficiency in mind.
          </p>
          
          <div className="flex items-center gap-4 opacity-0 animate-slide-up stagger-5">
            <a 
              href="https://www.linkedin.com/in/kennyruiz100507/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-medium px-6 py-3 rounded transition-all shadow-lg shadow-navy-700/20"
            >
              <Linkedin size={18} />
              View LinkedIn
            </a>
            <a 
              href="#about"
              className="flex items-center gap-2 text-slate-600 hover:text-navy-700 transition-colors"
            >
              Learn more
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        {/* Photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in stagger-3">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-navy-200 rounded-lg"></div>
            <div className="absolute -inset-8 border border-navy-100 rounded-lg"></div>
            
            <img 
              src="/kenny-profile.jpg" 
              alt="Kenny Ruiz"
              className="w-72 h-80 lg:w-80 lg:h-96 object-cover object-top rounded-lg shadow-2xl"
            />
            
            {/* Accent corner */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-navy-400 rounded-br-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-navy-300" size={24} />
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium">About</span>
          <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mt-2">
            What I Do
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            I'm a Strategic Operations Leader with deep expertise in leading operational teams, 
            managing large-scale implementations, and driving process efficiency within 
            utilization management environments — including government and payer-specific programs.
          </p>
          
          <p className="text-slate-500 leading-relaxed mb-8">
            My work sits at the intersection of operations leadership, systems architecture, and 
            process automation — building the infrastructure that makes teams fast, auditable, 
            and resilient.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: Briefcase,
                title: 'Implementation & Buildout',
                description: 'Led multi-client implementations within utilization management programs. Designed intake, review, escalation, and routing processes across cross-functional teams.'
              },
              {
                icon: Workflow,
                title: 'Process Engineering',
                description: 'Identify bottlenecks in authorization workflows. Design automation-driven solutions to reduce manual touchpoints and improve audit defensibility.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-6 card-hover">
                <item.icon className="text-navy-600 mb-4" size={24} />
                <h3 className="font-display text-lg text-navy-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Differentiator callout */}
        <div className="mt-12 p-6 bg-navy-50 border-l-4 border-navy-600 rounded-r-lg">
          <p className="text-navy-800 font-medium mb-2">What sets me apart:</p>
          <p className="text-slate-600">
            I don't just analyze processes — I build and operationalize them. 
            I translate ambiguity into executable systems and design workflows with 
            audit readiness, scalability, and automation in mind. I think in systems, not tickets.
          </p>
        </div>
      </div>
    </section>
  );
}

// Writing Section
function Writing() {
  return (
    <section id="writing" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium">Writing</span>
          <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mt-2">
            The Operations Desk
          </h2>
          <p className="text-slate-500 mt-4">
            Practitioner-level writing on healthcare operations and process improvement.
          </p>
        </div>
        
        {/* Featured Article */}
        <article className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm card-hover">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-wide uppercase text-navy-600 bg-navy-100 px-2 py-1 rounded">
                Process Improvement
              </span>
              <span className="text-xs text-slate-400">March 2026</span>
            </div>
            
            <h3 className="font-display text-2xl text-navy-900 mb-4">
              The Hidden Cost of Manual Work
            </h3>
            
            <p className="text-slate-600 mb-4 italic">
              Why small inefficiencies are quietly draining your team — and what to do instead
            </p>
            
            <div className="text-slate-500 space-y-4 mb-6">
              <p>
                In Utilization Management, we sit at one of the most operationally 
                intense intersections in healthcare. Every gap has to be closed. 
                Every new ask has to be met. And it has to be met <em>now</em>.
              </p>
              <p>
                When a new client requirement surfaces, the instinct is understandable: 
                add a person, add a step, build a quick spreadsheet on the side. But here 
                is the reality I keep coming back to: <strong className="text-slate-700">it is never just one step.</strong>
              </p>
            </div>
            
            {/* Key insight callout */}
            <div className="bg-slate-50 border-l-4 border-navy-500 p-4 rounded-r mb-6">
              <p className="text-slate-700 font-medium font-mono text-sm">
                "One extra step" is never just one extra step. It's one step multiplied 
                by every reviewer, every case, every shift, every week — forever.
              </p>
            </div>
            
            {/* Quick math box */}
            <div className="bg-navy-50 rounded-lg p-5 mb-6">
              <p className="text-navy-800 font-medium mb-3 text-sm uppercase tracking-wide">Quick Math</p>
              <p className="text-slate-600 text-sm">
                If your team manages 5 client-specific manual workarounds averaging 30 seconds each, 
                on 80 cases per day, that's over <span className="text-navy-700 font-semibold">830 hours of invisible labor annually</span>. 
                That's the equivalent of one full-time employee doing nothing but manual exceptions.
              </p>
            </div>
            
            <a 
              href="https://docs.google.com/document/d/1pJRk6J2MV64trEFmQfvbVImkhTv4mWES/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors link-underline"
            >
              Read full article
              <ExternalLink size={14} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

// Process/Diagram Section - Implementation Lifecycle
function ProcessSection() {
  const diagramRef = useRef(null);
  const [diagramRendered, setDiagramRendered] = useState(false);

  useEffect(() => {
    if (diagramRef.current && !diagramRendered) {
      const diagram = `
flowchart LR
    subgraph D1["1 · Discovery"]
        A1["Review contracts &<br/>regulatory requirements"]
        A2["Map stakeholder<br/>landscape"]
        A3["Capture current state<br/>& pain points"]
    end
    
    subgraph D2["2 · Design"]
        B1["Architect future-state<br/>workflows"]
        B2["Define automation<br/>logic & rules"]
        B3["Build exception<br/>handling frameworks"]
    end
    
    subgraph D3["3 · Build"]
        C1["Configure systems<br/>& integrations"]
        C2["Create reporting<br/>dashboards"]
        C3["Test end-to-end<br/>workflows"]
    end
    
    subgraph D4["4 · Enable"]
        D41["Develop SOPs &<br/>training materials"]
        D42["Deliver enablement<br/>sessions"]
        D43["Confirm cross-functional<br/>alignment"]
    end
    
    subgraph D5["5 · Optimize"]
        E1["Track KPIs vs<br/>baseline"]
        E2["Identify bottlenecks<br/>from data"]
        E3["Iterate & improve<br/>workflows"]
    end
    
    D1 --> D2 --> D3 --> D4 --> D5
      `;
      
      mermaid.render('mermaid-diagram', diagram).then(({ svg }) => {
        diagramRef.current.innerHTML = svg;
        setDiagramRendered(true);
      });
    }
  }, [diagramRendered]);

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium">Process Architecture</span>
          <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mt-2">
            Implementation Lifecycle
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl">
            How I approach building and launching operational programs — from discovery 
            through optimization. Each phase ensures alignment, correct configuration, 
            and scalability before go-live.
          </p>
        </div>
        
        {/* Mermaid Diagram */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 overflow-x-auto">
          <div ref={diagramRef} className="mermaid min-h-[300px] flex items-center justify-center">
            <div className="text-slate-400">Loading diagram...</div>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm mt-4 text-center">
          Generic, vendor-neutral framework applicable to any UM or payer implementation
        </p>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const skillCategories = [
    {
      title: 'Platforms & Tools',
      skills: ['Salesforce (Flows, Reports, Custom Objects)', 'Monday.com', 'Jira', 'OnceHub', 'Google Workspace', 'Notion']
    },
    {
      title: 'Analytics & Reporting',
      skills: ['Kibana', 'Tableau', 'QuickSight', 'Salesforce Dashboards', 'Google Sheets']
    },
    {
      title: 'Process & Documentation',
      skills: ['Mermaid.js / BPMN', 'Lucidchart', 'Figma', 'Confluence', 'Work Instructions & SOPs']
    },
    {
      title: 'Domain Expertise',
      skills: ['Utilization Management', 'Prior Authorization', 'Government Programs (Medicare/Medicaid)', 'Payer Implementations', 'IVR & Contact Center Ops']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium">Toolkit</span>
          <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mt-2">
            Skills & Tools
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="text-sm text-slate-600 bg-slate-100 px-3 py-1.5 rounded border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-navy-900 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-xl text-white mb-1">Kenny Ruiz</p>
            <p className="text-navy-300 text-sm">Strategic Operations Leader</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/kennyruiz100507/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kenny@example.com"
              className="text-navy-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-navy-800 text-center">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Kenny Ruiz. Built with React + Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Writing />
      <ProcessSection />
      <Skills />
      <Footer />
    </div>
  );
}
