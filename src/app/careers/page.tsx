'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, ArrowRight, MapPin, Clock, Briefcase, Heart, Zap, Globe, Shield, TrendingUp, Coffee, Users } from 'lucide-react'

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 61.8 + 10) % 100,
  top: (i * 73.6 + 5) % 100,
  duration: 3 + (i % 5) * 0.4,
  delay: (i % 4) * 0.5,
}))

const openRoles = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Austin, TX / Remote',
    type: 'Full-Time',
    description: 'Design and build production-grade agentic AI systems for enterprise clients. You will architect multi-agent pipelines, optimize LLM inference, and ensure reliability at scale.',
    requirements: ['3+ years with LLMs / AI systems', 'Python, TypeScript', 'Experience with LangChain, CrewAI, or similar', 'Strong systems design fundamentals'],
  },
  {
    title: 'AI Solutions Architect',
    department: 'Consulting',
    location: 'Austin, TX / Hybrid',
    type: 'Full-Time',
    description: 'Partner with enterprise clients to design AI transformation roadmaps. Translate complex business requirements into technical architectures and lead discovery workshops.',
    requirements: ['5+ years in enterprise consulting or architecture', 'Deep understanding of AI/ML landscape', 'Client-facing communication skills', 'Experience with cloud platforms (AWS, Azure, GCP)'],
  },
  {
    title: 'Machine Learning Researcher',
    department: 'AI Research',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Advance Dittra\'s AI capabilities by exploring frontier research in agentic systems, RAG, fine-tuning, and multi-modal models. Translate research into production-ready solutions.',
    requirements: ['PhD or MS in CS, ML, or related field', 'Publication record or equivalent research experience', 'Proficiency in PyTorch / JAX', 'Experience with RLHF or alignment research a plus'],
  },
  {
    title: 'Full-Stack Engineer (AI Products)',
    department: 'Engineering',
    location: 'Austin, TX / Remote',
    type: 'Full-Time',
    description: 'Build the interfaces and APIs that surface our AI capabilities to enterprise users. Work closely with AI engineers to create intuitive, performant, and beautiful products.',
    requirements: ['3+ years with React, Next.js, TypeScript', 'Experience with REST / GraphQL APIs', 'Eye for UI/UX quality', 'Familiarity with AI/LLM integrations a plus'],
  },
  {
    title: 'Enterprise Account Executive',
    department: 'Sales',
    location: 'Austin, TX',
    type: 'Full-Time',
    description: 'Drive enterprise growth by identifying, nurturing, and closing strategic accounts. Own the full sales cycle from outbound to contract signature for deals $250K+.',
    requirements: ['5+ years in enterprise SaaS or technology sales', 'Proven track record closing $500K+ ARR', 'Ability to sell to technical and executive buyers', 'Experience in AI, data, or consulting preferred'],
  },
  {
    title: 'AI Product Manager',
    department: 'Product',
    location: 'Austin, TX / Remote',
    type: 'Full-Time',
    description: 'Define and drive the product vision for Dittra\'s AI platforms. Work at the intersection of user needs, business goals, and cutting-edge AI capabilities.',
    requirements: ['4+ years in product management', 'Technical background or strong AI literacy', 'Experience shipping B2B SaaS products', 'Excellent stakeholder communication'],
  },
]

const perks = [
  {
    icon: TrendingUp,
    title: 'Competitive Compensation',
    description: 'Top-of-market salary, meaningful equity, and performance bonuses tied to real outcomes.',
  },
  {
    icon: Globe,
    title: 'Remote-Friendly',
    description: 'Work from anywhere. We trust you to deliver results, not to sit in a chair.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive medical, dental, and vision. Plus a $1,500 annual wellness stipend.',
  },
  {
    icon: Zap,
    title: 'Learning Budget',
    description: '$3,000/year for conferences, courses, and books. We invest in your growth.',
  },
  {
    icon: Coffee,
    title: 'Flexible PTO',
    description: 'Unlimited vacation policy with a minimum 15 days encouraged. Rest is productive.',
  },
  {
    icon: Shield,
    title: '401(k) Match',
    description: '4% company match, fully vested from day one.',
  },
  {
    icon: Users,
    title: 'World-Class Team',
    description: 'Work alongside PhDs, ex-FAANG engineers, and serial entrepreneurs solving hard problems.',
  },
  {
    icon: Briefcase,
    title: 'High Impact Work',
    description: 'Every line of code, every conversation, every idea shapes AI systems used by millions.',
  },
]

const values = [
  { label: 'Ship fast, learn faster', description: 'We iterate in weeks, not quarters.' },
  { label: 'Ownership over activity', description: 'We measure results, not hours.' },
  { label: 'Radical transparency', description: 'We share context freely and communicate directly.' },
  { label: 'Curiosity as a practice', description: 'We read, debate, and stay at the frontier.' },
]

export default function CareersPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0A0F1C] dark:via-[#0B1324] dark:to-[#0A0F1C]" />
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-30" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/15 rounded-full blur-[120px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.35, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{ left: `${p.left}%`, top: `${p.top}%` }}
              animate={{ y: [0, -30, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm text-cyan-700 dark:text-cyan-300 font-medium tracking-wide uppercase">
              We&apos;re Hiring
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block text-slate-900 dark:text-white">Build the Future</span>
            <span className="block gradient-text">of Enterprise AI</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Join a team of world-class AI engineers, researchers, and operators on a mission to make intelligent automation real for the world&apos;s most ambitious organizations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              View Open Roles <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-slate-700 dark:text-white hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Culture ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#0B1324]" />
        <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-15" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium uppercase tracking-wider">
                <Heart className="w-4 h-4" />
                Our Culture
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                A place where the <span className="gradient-text">best work</span> of your career happens
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                At Dittra, we don&apos;t just talk about AI — we live it. Every team member is close to the frontier, working on problems that matter, with colleagues who push each other to grow.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We operate with high trust, high autonomy, and high accountability. We celebrate intellectual honesty and move quickly, but never recklessly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  className="cyber-card p-6 flex items-start gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{v.label}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-[#0A0F1C] dark:to-[#0B1324]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Benefits & <span className="gradient-text">Perks</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We take care of the people who take care of our mission.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                className="cyber-card p-6 group hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4">
                  <perk.icon className="w-5 h-5 text-cyan-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{perk.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="open-roles" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#0B1324]" />
        <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-15" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-4 h-4" />
              {openRoles.length} Open Positions
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Open <span className="gradient-text">Roles</span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                className="cyber-card p-7 group hover:-translate-y-0.5 transition-transform duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        {role.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{role.title}</h3>
                  </div>
                  <Link
                    href={`/contact#book-consultation`}
                    className="inline-flex items-center gap-2 flex-shrink-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-cyan-500/20"
                  >
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {role.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {role.type}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-sm">{role.description}</p>

                <div className="flex flex-wrap gap-2">
                  {role.requirements.map(req => (
                    <span
                      key={req}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/8 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Generic apply */}
          <motion.div
            className="max-w-4xl mx-auto mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="cyber-card p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Don&apos;t see the right role?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We hire exceptional people regardless of open headcount. Send us your story and we&apos;ll be in touch.
              </p>
              <a
                href="mailto:careers@dittra.com"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-slate-950 shadow-md shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
