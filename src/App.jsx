import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Linkedin, Mail, ChevronDown, Workflow, Briefcase, ArrowRight, Menu, X, BookOpen, Headphones } from 'lucide-react';
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

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/writing', label: 'Writing' },
  { to: '/process', label: 'Process' },
  { to: '/skills', label: 'Skills' },
  { to: '/books', label: 'Books' },
  { to: '/podcasts', label: 'Podcasts' },
];

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? 'text-navy-800 font-medium' : 'text-slate-600 hover:text-navy-700'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileOpen ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-display text-xl text-navy-800 hover:text-navy-600 transition-colors" onClick={() => setMobileOpen(false)}>
          KR
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
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

        {/* Mobile menu button */}
        <button
          className="md:hidden text-navy-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://www.linkedin.com/in/kennyruiz100507/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white px-4 py-2 rounded transition-all w-fit"
          >
            <Linkedin size={16} />
            <span className="text-sm">Connect</span>
          </a>
        </div>
      )}
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
            <Link 
              to="/about"
              className="flex items-center gap-2 text-slate-600 hover:text-navy-700 transition-colors"
            >
              Learn more
              <ArrowRight size={16} />
            </Link>
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

function ManualWorkArticle() {
  const [expanded, setExpanded] = useState(false);

  const frameworkSteps = [
    'Can this be absorbed into an existing step, or does it genuinely require a new one?',
    'If it requires a new step — is that step a candidate for automation or platform logic?',
    'If manual handling is unavoidable short-term, what is the build timeline to eliminate it?',
    'What is the annualized labor cost of the manual workaround? Does that justify expedited dev prioritization?',
  ];

  const undisclosedSteps = [
    'Capture the gap clearly and document the operational impact in concrete terms (time, volume, error risk)',
    'Advocate for a technology-based resolution on a defined timeline',
    'Implement the minimum viable manual process in the interim — not the most comfortable one',
    'Sunset the manual workaround when the build is complete',
  ];

  const habits = [
    { title: 'Put a number on every workaround.', body: 'Before accepting a manual fix as permanent, estimate the annual hours. Make the cost visible.' },
    { title: 'Separate the interim fix from the long-term solution.', body: "They're not the same conversation. Don't conflate them." },
    { title: 'Challenge every new screen and every new field.', body: 'Not to be difficult — but because every UI touchpoint is a cognitive load and an error opportunity.' },
    { title: "Use the platform's capabilities before building around them.", body: 'If we have AI that can route, flag, and classify — we should be using it to absorb variation, not documenting variation in a spreadsheet.' },
  ];

  return (
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
            intense intersections in healthcare. We are managing prior authorization
            workflows at scale, racing against clinical timelines, and held to
            compliance standards that don't move just because a client forgot to
            disclose a requirement during implementation. Every gap has to be
            closed. Every new ask has to be met. And it has to be met <em>now</em>.
          </p>
          <p>
            When a new client requirement surfaces — or an existing one shifts —
            the instinct is understandable: add a person, add a step, build a quick
            spreadsheet on the side, write it all down in a Word doc. Solved. Done.
            Ship it.
          </p>
          <p>
            But here is the reality I keep coming back to:{' '}
            <strong className="text-slate-700">it is never just one step.</strong>{' '}
            It is never just one extra screen, one additional documenting field,
            one small workaround. It accumulates. And the accumulation is exactly
            where organizations lose — not dramatically, but quietly, consistently,
            and at a scale that only becomes visible when you step back and
            actually measure it.
          </p>
        </div>

        {/* Key insight callout */}
        <div className="bg-slate-50 border-l-4 border-navy-500 p-4 rounded-r mb-6">
          <p className="text-slate-700 font-medium font-mono text-sm">
            "One extra step" is never just one extra step. It's one step multiplied
            by every reviewer, every case, every shift, every week — forever.
          </p>
        </div>

        {expanded && (
          <div className="text-slate-500 space-y-6">
            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">The Anatomy of a "Small" Fix</h4>
              <p>
                Picture this. A client goes live and three weeks in, their team
                flags that a specific authorization type needs a secondary
                clinical note field captured — something that wasn't in the
                original SOW. No big deal. A quick column gets added to the
                tracking spreadsheet. The team gets a message with instructions.
                The process doc gets updated.
              </p>
              <p>
                This takes maybe two hours to set up. And then it runs —
                invisibly, in the background — forever.
              </p>
              <p>Let's put some rough numbers to it:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>30 seconds per case to manually enter the extra field</li>
                <li>80 cases per day processed by that team</li>
                <li>250 working days per year</li>
              </ul>
              <p>
                That's 600,000 seconds — or roughly 167 hours — every single
                year spent on one undisclosed requirement. One. Now multiply
                that by the number of client-specific variations your team is
                carrying right now.
              </p>
            </div>

            {/* Quick math box */}
            <div className="bg-navy-50 rounded-lg p-5">
              <p className="text-navy-800 font-medium mb-3 text-sm uppercase tracking-wide">Quick Math</p>
              <p className="text-slate-600 text-sm">
                If your team manages 5 client-specific manual workarounds
                averaging 30 seconds each, on 80 cases per day, that's over{' '}
                <span className="text-navy-700 font-semibold">830 hours of invisible labor annually</span>.
                That's the equivalent of one full-time employee doing nothing
                but manual exceptions — and it never shows up on a headcount
                report.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">Why We Reach for the "Add a Step" Solution</h4>
              <p>
                To be clear, I'm not criticizing the instinct. I've done it.
                When a client escalates and leadership wants the gap closed by
                end of week, the fastest path to resolution is usually a human
                workaround and a documented process update.
              </p>
              <p>But there's a pattern I want to name:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-700">Speed bias.</strong> Manual fixes are faster to implement than system changes. The spreadsheet takes an afternoon; a platform enhancement takes a sprint cycle or a backlog prioritization conversation.</li>
                <li><strong className="text-slate-700">Risk aversion.</strong> Changing the tech feels scarier than adding a process step. What if the build breaks something else? What if the timeline slips?</li>
                <li><strong className="text-slate-700">Invisible cost.</strong> The manual work gets done. The case gets closed. The client is happy. Nobody sees the tax being paid — because it's paid in seconds, not dollars, and spread across dozens of people.</li>
                <li><strong className="text-slate-700">Documentation theater.</strong> We write up the workaround in a process doc, as if documenting something makes it optimized. A well-documented bad process is still a bad process.</li>
              </ul>
              <p>
                Like many companies that leverage AI to improve workflows — and
                yet our first response to a process gap is sometimes to solve
                it like it's 1998: add a person, add a column, add a step.
                There is a fundamental tension there that we need to keep
                calling out.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">Where the Real Savings Live</h4>
              <p>
                True operational savings in UM — the kind that compound, that
                reduce error rates, that scale without headcount — almost
                always live in one of two places:
              </p>
              <p>
                <strong className="text-slate-700">1. Process optimization.</strong>{' '}
                Before adding a step, the first question should always be: can
                we eliminate or redesign a step that already exists? Can the
                new client requirement be absorbed into the existing workflow
                rather than appended to it? Can the authorization review path
                be restructured so the exception becomes the rule and the rule
                requires less handling?
              </p>
              <p>
                <strong className="text-slate-700">2. Technology leverage.</strong>{' '}
                This is where our competitive advantage actually sits. If we
                are already using AI to surface clinical criteria, flag
                incomplete submissions, and route cases intelligently, then the
                same infrastructure can absorb a new data capture requirement,
                a new routing rule, a new client-specific logic branch. The
                cost of building it into the platform is a one-time
                investment. The cost of running it manually is infinite.
              </p>
            </div>

            {/* Key insight callout */}
            <div className="bg-slate-50 border-l-4 border-navy-500 p-4 rounded-r">
              <p className="text-slate-700 font-medium font-mono text-sm">
                A well-documented bad process is still a bad process.
                Documentation is not optimization.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                The conversation I want us to normalize is: when a new
                requirement lands, we evaluate it against a simple framework
                before deciding how to solve it.
              </p>
              <div className="bg-navy-50 rounded-lg p-5">
                <p className="text-navy-800 font-medium mb-3 text-sm uppercase tracking-wide">
                  The Gap-Close Decision Framework
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm">
                  {frameworkSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">A Note on Undisclosed Requirements</h4>
              <p>
                Some of our highest-friction operational moments come not from
                scope creep, but from requirements that were never disclosed
                in the first place — things the client assumed were standard,
                or things that surfaced only after go-live when real cases
                started flowing through.
              </p>
              <p>
                These gaps are unavoidable in a complex clinical workflow
                environment. What isn't unavoidable is how we respond to them.
                The undisclosed requirement becomes a permanent manual
                workaround only if we let it. Our job — specifically in a team
                that sits between operations and technology — is to be the
                translation layer:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {undisclosedSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
              <p>
                That last point matters more than it sounds. Workarounds do
                not self-destruct. If you don't actively retire them, they
                become permanent. The spreadsheet from 2022 is still running
                somewhere right now. I guarantee it.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">What This Means for How We Work</h4>
              <p>
                None of this is an argument against hustle, or against doing
                what it takes to close a gap when the client needs it closed.
                It's an argument for being honest about the true cost of the
                solutions we choose — and for building a team culture where
                the default question is optimization, not addition.
              </p>
              <p>A few habits that have started to shift how I approach this:</p>
              <ul className="list-disc pl-6 space-y-2">
                {habits.map((h, i) => (
                  <li key={i}><strong className="text-slate-700">{h.title}</strong> {h.body}</li>
                ))}
              </ul>
              <p>
                The organizations that win in UM over the next five years are
                not going to be the ones with the most FTEs or the most
                comprehensive process documentation. They're going to be the
                ones who built the discipline to keep their operations clean —
                who treated every manual workaround as temporary, and who had
                the technical infrastructure to back that promise up.
              </p>
              <p className="text-slate-700 font-medium">
                We have that infrastructure. The question is whether we use it.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <p className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium mb-2">About the Author</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Kenny is a Manager in Utilization Management Technology, where
                he focuses on optimizing the prior authorization process
                through AI-driven workflows and systematic process
                improvement. He writes about the intersection of operations,
                technology, and healthcare efficiency at The Operations Desk.
              </p>
            </div>
          </div>
        )}

        {!expanded && (
          <div className="bg-navy-50 rounded-lg p-5 mb-6">
            <p className="text-navy-800 font-medium mb-3 text-sm uppercase tracking-wide">Quick Math</p>
            <p className="text-slate-600 text-sm">
              If your team manages 5 client-specific manual workarounds averaging 30 seconds each,
              on 80 cases per day, that's over <span className="text-navy-700 font-semibold">830 hours of invisible labor annually</span>.
              That's the equivalent of one full-time employee doing nothing but manual exceptions.
            </p>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors link-underline mt-2"
        >
          {expanded ? 'Show less' : 'Read full article'}
          <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </article>
  );
}

function PastoralInstinctArticle() {
  const [expanded, setExpanded] = useState(false);

  const pastoralFrameQuestions = [
    'Who is this process ultimately serving?',
    'What does failure cost them, specifically?',
    'Would I build this differently if I had to explain it to that person face-to-face?',
  ];

  return (
    <article className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm card-hover">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-wide uppercase text-navy-600 bg-navy-100 px-2 py-1 rounded">
            Process Improvement
          </span>
          <span className="text-xs text-slate-400">June 2026</span>
        </div>

        <h3 className="font-display text-2xl text-navy-900 mb-4">
          The Pastoral Instinct
        </h3>

        <p className="text-slate-600 mb-4 italic">
          Why former pastors make better process improvers
        </p>

        <div className="text-slate-500 space-y-4 mb-6">
          <img
            src="/kenny-church.jpg"
            alt="Inside the church auditorium Kenny helped build out"
            className="w-full sm:w-64 sm:float-right sm:ml-6 mb-4 rounded-lg shadow-md object-cover"
          />
          <p>
            I spent 13 years working with at-risk youth — teenagers in foster
            care, court-involved kids, families in crisis. After that, I
            helped build a church campus from the ground up. I'm not trained
            as an operations analyst. I didn't come up through a consulting
            track or a business school program. I came up through rooms where
            the stakes were human, and the margin for error was somebody's
            life.
          </p>
          <p>
            So when people ask how I ended up doing process improvement work
            in healthcare, I usually give the short answer: I followed the
            work where it mattered. But the longer answer is more interesting
            and more useful than that.
          </p>
          <p>
            The pastoral background isn't incidental to how I do this work.{' '}
            <strong className="text-slate-700">It's foundational to it.</strong>
          </p>
        </div>

        {/* Key insight callout */}
        <div className="bg-slate-50 border-l-4 border-navy-500 p-4 rounded-r mb-6">
          <p className="text-slate-700 font-medium font-mono text-sm">
            Every process has a person at the end of it. The question is
            whether the person who built it ever stopped to think about that.
          </p>
        </div>

        {expanded && (
          <div className="text-slate-500 space-y-6">
            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">What pastoral work actually teaches you</h4>
              <p>
                When you're a pastor, you are constantly managing systems that
                serve people, and the people are always visible. You see them
                every week. You know their names. You know when the process
                broke down on them, because they'll tell you. Or worse, they
                won't come back.
              </p>
              <p>
                That kind of feedback loop changes how you think about the
                work you're designing. You don't abstract the person out of
                the system. You can't. They're sitting in the front row.
              </p>
              <p>
                In corporate operations, that feedback loop is longer. The
                person at the end of a prior authorization workflow isn't in
                the room when you're building the routing logic. They're a
                patient. Probably scared. Probably waiting. Possibly in pain.
                And here is the kicker — they have no idea that a decision
                made in a workflow meeting is about to determine whether their
                procedure gets approved this week or next month. Or at all.
              </p>
              <p>
                That distance is exactly where bad process lives. And it's
                exactly where pastoral instincts push back.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">The discipline of standing at the end of the line</h4>
              <p>
                One of the things you learn when you're serving communities in
                crisis is that process dysfunction doesn't hurt abstractions.
                It doesn't hurt workflows. It doesn't hurt KPIs. It hurts
                people, and the people it hurts most are usually the ones
                with the fewest resources to absorb the delay, the error, or
                the gap.
              </p>
              <p>
                In utilization management, that means patients waiting for
                authorization decisions. It means physicians trying to
                complete peer-to-peer reviews in 15-minute windows. It means
                care coordinators navigating incomplete documentation at the
                tail end of a 10-hour shift. Every inefficiency we tolerate,
                every manual workaround we leave running, every field we
                require that adds nothing, every extra screen that slows a
                reviewer down, gets paid by someone. Usually not us.
              </p>
              <p>
                I didn't learn that from a Lean certification. I learned it
                from sitting across from a 16-year-old in a group home and
                realizing that every missed appointment, every misfiled form,
                every "we'll follow up next week" was a real cost to a real
                person who had already been let down by systems more times
                than they could count.
              </p>
            </div>

            {/* Pastoral frame callout */}
            <div className="bg-navy-50 rounded-lg p-5">
              <p className="text-navy-800 font-medium mb-3 text-sm uppercase tracking-wide">The Pastoral Frame</p>
              <p className="text-slate-600 text-sm mb-3">
                Good process improvement asks three questions before it asks
                anything about efficiency:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm">
                {pastoralFrameQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ol>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">Why empathy is a technical skill</h4>
              <p>
                There's a version of operations work that treats empathy as a
                soft add-on. Something you bolt onto the real work of systems
                design after the logic is already settled. I've never found
                that approach to be particularly effective, and I think the
                reason is structural.
              </p>
              <p>
                When you design a process without first understanding who
                absorbs the failure modes, you end up optimizing for the
                wrong thing. You optimize for throughput at the expense of
                accuracy. You optimize for speed at the expense of
                completeness. You build a workflow that works beautifully
                under normal conditions and collapses precisely when the
                stakes are highest — when someone is out of network, when
                documentation is incomplete, when a clinical edge case needs a
                human decision, and your automation has nowhere to route it.
              </p>
              <p>
                Pastoral work trains you to ask the failure question first,
                not last. You build for the outlier, not the average case,
                because the outlier is often the person who needs the most
                help and has the least capacity to work around a broken
                system.
              </p>
              <p>
                That instinct — designing for the hardest case, not the
                easiest one — is not soft. It's a design discipline. And it
                produces more robust processes than any methodology I've
                encountered that starts from volume metrics and works
                backward.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">The sermon nobody's giving in UM</h4>
              <p>
                Here is something I've thought about a lot: utilization
                management is one of the most consequential points of contact
                between a healthcare system and a patient. Prior authorization
                decisions affect whether someone gets the procedure their
                physician recommended, on the timeline their physician
                recommended, without a financial barrier that derails the
                whole care plan.
              </p>
              <p>
                That's not an administrative function. That's a pastoral
                function with an administrative layer on top of it.
              </p>
              <p>
                The organizations doing this work well — and I've seen what it
                looks like when it's done well — aren't just efficient.
                They're designed with that end-state patient in mind at every
                decision point. The routing logic accounts for urgency. The
                automation handles the routine so the humans can handle the
                complex. The manual workarounds have sunset dates because
                someone understood that every workaround deferred is a tax on
                the person waiting at the end of the line.
              </p>
              <p className="text-slate-700 font-medium">
                Efficiency without orientation is just motion. The
                orientation is the point. Everything else is how you get
                there.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xl text-navy-800">What I carry from that chapter</h4>
              <p>
                I don't talk about my pastoral background often in
                operational settings. It doesn't always fit neatly into a
                credentials conversation. But it is the most useful thing I
                bring to this work. Not because it makes me feel connected to
                a mission, but because it makes me structurally incapable of
                forgetting who the process is for.
              </p>
              <p>
                When I look at a workflow, I'm not just looking at cycle time
                and error rates. I'm looking for where the person at the end
                of the line gets dropped. I'm looking for the step that adds
                friction without adding value. I'm looking for the gap
                between what the process was designed to do and what it
                actually does to the human beings who move through it.
              </p>
              <p>
                That's not a uniquely pastoral skill. But it is a skill that
                pastoral work forces you to develop, because in that
                environment, the feedback is immediate, the cost is human,
                and there is nowhere to hide from a system that isn't serving
                the people it was built for.
              </p>
              <p className="text-slate-700 font-medium">
                Operations work should feel the same way. Most of the time, it
                doesn't. That's the gap worth closing.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <p className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium mb-2">About the Author</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Kenny is a Manager in Utilization Management Technology, where
                he focuses on optimizing the prior authorization process
                through AI-driven workflows and systematic process
                improvement. He writes about the intersection of operations,
                technology, and healthcare efficiency at The Operations Desk.
              </p>
            </div>
          </div>
        )}

        {!expanded && (
          <div className="bg-navy-50 rounded-lg p-5 mb-6">
            <p className="text-navy-800 font-medium mb-3 text-sm uppercase tracking-wide">The Pastoral Frame</p>
            <p className="text-slate-600 text-sm mb-3">
              Good process improvement asks three questions before it asks
              anything about efficiency:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-600 text-sm">
              {pastoralFrameQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors link-underline mt-2"
        >
          {expanded ? 'Show less' : 'Read full article'}
          <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </article>
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

        <div className="space-y-8">
          <PastoralInstinctArticle />
          <ManualWorkArticle />
        </div>
      </div>
    </section>
  );
}

// Process/Diagram Section - Implementation Lifecycle
function ProcessSection() {
  const diagramRef = useRef(null);
  const [diagramRendered, setDiagramRendered] = useState(false);

  const ivrDiagramRef = useRef(null);
  const [ivrRendered, setIvrRendered] = useState(false);

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

  useEffect(() => {
    if (ivrDiagramRef.current && !ivrRendered) {
      const ivrDiagram = `
%%{init: {'flowchart': {'curve': 'basis', 'nodeSpacing': 45, 'rankSpacing': 70}}}%%
flowchart LR
    Start(["Inbound Call<br/>Health Plan Support Line"])

    Start --> PhoneDownCheck{"Phone system<br/>outage?"}:::decision
    PhoneDownCheck -->|Yes| PhoneDownMsg["PROMPT<br/>'We're experiencing technical<br/>difficulties and can't take your<br/>call. Please use the self-service<br/>portal to manage requests.'"]:::prompt
    PhoneDownMsg --> PhoneDownEnd(["Call Cannot Be<br/>Completed"]):::outcomeNeutral

    PhoneDownCheck -->|No| HoursCheck{"Within<br/>business hours?"}:::decision

    HoursCheck -->|Holiday| HolidayMsg["PROMPT<br/>'Our Service Center is closed for<br/>the holiday. You can check status<br/>or submit a request on the<br/>self-service portal.'"]:::prompt
    HolidayMsg --> HolidayEnd(["Call Ended<br/>(Holiday Closure)"]):::outcomeNeutral

    HoursCheck -->|Off-hours| OffHoursMsg["PROMPT<br/>'We're currently closed. Check<br/>status or submit a request on the<br/>self-service portal, or leave a<br/>message after the tone.'"]:::prompt
    OffHoursMsg --> OffHoursVM["Voicemail<br/>captured"]:::nlu
    OffHoursVM --> OffHoursEnd(["Off-Hours Closure<br/>Voicemail Captured"]):::outcomeNeutral

    HoursCheck -->|Within hours| Greeting["PROMPT<br/>'Thank you for calling. For<br/>quality purposes, this call may<br/>be recorded.'"]:::prompt

    Greeting --> PortalDownCheck{"Self-service portal<br/>outage?"}:::decision
    PortalDownCheck -->|Yes| PortalDownMsg["PROMPT<br/>'The self-service portal is<br/>temporarily unavailable. We're<br/>working to resolve this.'"]:::prompt
    PortalDownMsg --> MainMenu
    PortalDownCheck -->|No| MainMenu

    MainMenu["PROMPT<br/>'For technical support, press 1.<br/>For provider services, press 2.<br/>To return a clinical call, press 3.<br/>For questions on a decision letter,<br/>press 4.'"]:::prompt

    MainMenu -->|1| TSIntro
    subgraph D1["Digit 1 — Technical Support"]
        TSIntro["PROMPT<br/>'For account or login help,<br/>authentication assistance, or<br/>general support, stay on the<br/>line.'"]:::prompt
        TSIntro --> TS_ConnectAgent[["→ Connect to Agent<br/>Queue: Technical Support"]]:::routing
    end

    MainMenu -->|2| ProvIntro
    subgraph D2["Digit 2 — Provider Services"]
        ProvIntro["PROMPT<br/>'Visit our resources page for FAQs<br/>and self-service tools. If you<br/>still need help, stay on the<br/>line.'"]:::prompt
        ProvIntro --> Prov_ConnectAgent[["→ Connect to Agent<br/>Queue: Provider Registration"]]:::routing
    end

    MainMenu -->|3| D3Survey
    subgraph D3["Digit 3 — Clinical Callback"]
        D3Survey["PROMPT<br/>'At the end of your call, we'll<br/>invite you to a brief survey.<br/>Press 1 to participate, or 2 to<br/>decline.'"]:::prompt
        D3Survey --> D3Capture["Survey opt-in<br/>captured"]:::nlu
        D3Capture --> D3_ConnectAgent[["→ Connect to Agent<br/>Queue: Peer-to-Peer Review"]]:::routing
    end

    MainMenu -->|4| D4Survey
    subgraph D4["Digit 4 — Decision Letter"]
        D4Survey["PROMPT<br/>'At the end of your call, we'll<br/>invite you to a brief survey.<br/>Press 1 to participate, or 2 to<br/>decline.'"]:::prompt
        D4Survey --> D4Capture["Survey opt-in<br/>captured"]:::nlu
        D4Capture --> D4_ConnectAgent[["→ Connect to Agent<br/>Queue: Peer-to-Peer Review"]]:::routing
    end

    D1 ~~~ D2
    D2 ~~~ D3
    D3 ~~~ D4

    classDef prompt fill:#E8F4FA,stroke:#039EC3,stroke-width:1px,text-align:left,color:#0c4a6e
    classDef nlu fill:#E4F9F3,stroke:#11B08D,stroke-width:1.5px,stroke-dasharray: 4 2,text-align:left,color:#0f4c3a
    classDef decision fill:#FFF3D6,stroke:#DD8A0E,stroke-width:1px,color:#78350f
    classDef routing fill:#F1EAFB,stroke:#6948A6,stroke-width:1px,color:#4c1d55
    classDef outcomeNeutral fill:#9AA5B1,stroke:#6b7480,color:#fff

    style D1 fill:#F2F2F2,stroke:#B0B0B0,stroke-width:1px
    style D2 fill:#F2F2F2,stroke:#B0B0B0,stroke-width:1px
    style D3 fill:#F2F2F2,stroke:#B0B0B0,stroke-width:1px
    style D4 fill:#F2F2F2,stroke:#B0B0B0,stroke-width:1px
      `;

      mermaid.render('mermaid-ivr-diagram', ivrDiagram).then(({ svg }) => {
        ivrDiagramRef.current.innerHTML = svg;
        setIvrRendered(true);
      });
    }
  }, [ivrRendered]);

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

        {/* IVR Example */}
        <div className="mt-20">
          <div className="mb-12">
            <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium">IVR Design Example</span>
            <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mt-2">
              Call Routing Flow
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl">
              A representative example of how I document IVR call flows — mapping outage
              handling, business-hour logic, and menu routing down to the exact prompt
              language and agent queue before a single line of config is touched.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 overflow-x-auto">
            <div ref={ivrDiagramRef} className="mermaid min-h-[300px] flex items-center justify-center">
              <div className="text-slate-400">Loading diagram...</div>
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-4 text-center">
            Illustrative example — anonymized and generalized from real IVR design work; no client, vendor, or account-specific details shown
          </p>
        </div>
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

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

// Books Section
function Books() {
  const books = [
    {
      title: '12 Rules for Life',
      author: 'Jordan B. Peterson',
      blurb: 'Twelve principles for taking responsibility and imposing order on chaos — a recurring lens for how I think about discipline and personal accountability at work.',
      url: 'https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      blurb: 'The clearest framework I\u2019ve found for how small, consistent systems beat big one-time efforts — the same principle I apply to process design, not just personal habits.',
      url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299',
    },
    {
      title: '7 Rules of Power',
      author: 'Jeffrey Pfeffer',
      blurb: 'A research-backed, unsentimental look at how power actually works inside organizations — useful for navigating change management and stakeholder dynamics.',
      url: 'https://www.amazon.com/Rules-Power-Surprising-but-True-Advice-Advance/dp/1637741227',
    },
    {
      title: 'How Will You Measure Your Life?',
      author: 'Clayton M. Christensen',
      blurb: 'Applies rigorous business strategy thinking to personal life decisions — a good gut-check for aligning day-to-day work against what actually matters long-term.',
      url: 'https://www.amazon.com/How-Will-Measure-Your-Life/dp/0062102419',
    },
    {
      title: 'Grit',
      author: 'Angela Duckworth',
      blurb: 'Research on passion and sustained perseverance as the real driver of achievement, over raw talent — a helpful reminder when a project or process redesign gets long.',
      url: 'https://www.amazon.com/Grit-Perseverance-Angela-Duckworth-author/dp/1501144162',
    },
    {
      title: "Don't Believe Everything You Think",
      author: 'Joseph Nguyen',
      blurb: 'A short, direct case for separating your thinking from your circumstances — a useful reset when a high-pressure operational day starts to feel like a crisis.',
      url: 'https://www.amazon.com/Dont-Believe-Everything-Think-Expanded/dp/B0D47VYQMY',
    },
  ];

  return (
    <section className="py-24 bg-white relative min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium">Reading List</span>
          <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mt-2">
            Books
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl">
            Titles that have shaped how I think about operations, systems, and leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {books.map((book, i) => (
            <a
              key={i}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-50 border border-slate-200 rounded-lg p-6 card-hover hover:border-navy-300 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <BookOpen className="text-navy-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-display text-lg text-navy-800 link-underline inline-block">{book.title}</h3>
                  <p className="text-slate-500 text-sm">{book.author}</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{book.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Podcasts Section
function Podcasts() {
  const podcasts = [
    {
      title: 'Modern Wisdom',
      host: 'Chris Williamson',
      blurb: 'Long-form conversations with researchers, authors, and high performers on discipline, decision-making, and how people actually change behavior.',
      url: 'https://podcasts.apple.com/us/podcast/modern-wisdom/id1347973549',
    },
    {
      title: 'Pfeffer on Power',
      host: 'Jeffrey Pfeffer',
      blurb: 'Stanford professor and author of 7 Rules of Power interviews guests on how they\u2019ve actually built and used influence in their careers.',
      url: 'https://podcasts.apple.com/us/podcast/pfeffer-on-power/id1644174653',
    },
    {
      title: 'The Personal Finance Podcast',
      host: 'Andrew Giancola',
      blurb: 'Practical, no-jargon breakdowns of building wealth and financial systems \u2014 the same systems-first thinking applied to personal finance.',
      url: 'https://podcasts.apple.com/us/podcast/the-personal-finance-podcast/id1511786733',
    },
    {
      title: 'The Systems Thinker Show',
      host: 'Karass Innovations Group',
      blurb: 'A show built directly around the discipline this whole site is about \u2014 process mapping, lean thinking, and engineering smarter operations.',
      url: 'https://podcasts.apple.com/us/podcast/the-systems-thinker-show-engineering-smarter/id1806875662',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-600 font-medium">Listening List</span>
          <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mt-2">
            Podcasts
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl">
            What's in rotation on the commute — operations, leadership, and personal systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {podcasts.map((pod, i) => (
            <a
              key={i}
              href={pod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-slate-200 rounded-lg p-6 card-hover hover:border-navy-300 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <Headphones className="text-navy-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-display text-lg text-navy-800 link-underline inline-block">{pod.title}</h3>
                  <p className="text-slate-500 text-sm">{pod.host}</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{pod.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// 404 fallback
function NotFound() {
  return (
    <section className="py-24 bg-white relative min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h2 className="font-display text-3xl text-navy-900 mb-4">Page not found</h2>
        <Link to="/" className="text-navy-600 hover:text-navy-800 link-underline">
          Back to home
        </Link>
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
              href="mailto:kruiz321@gmail.com"
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/process" element={<ProcessSection />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/books" element={<Books />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
