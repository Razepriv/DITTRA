'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Target, Eye, Heart, Zap, Users, Globe, Award, ArrowRight, Linkedin } from 'lucide-react'

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 61.8 + 10) % 100,
  top: (i * 73.6 + 5) % 100,
  duration: 3 + (i % 5) * 0.4,
  delay: (i % 4) * 0.5,
}))

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '200+', label: 'AI Agents Deployed' },
  { value: '98%', label: 'Client Retention' },
  { value: '$2B+', label: 'Value Unlocked' },
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Every solution we build is anchored to measurable business outcomes. We define success by your results, not our outputs.',
  },
  {
    icon: Zap,
    title: 'Velocity with Precision',
    description: 'We move fast without cutting corners. Rapid iteration, rigorous testing, and careful deployment are not trade-offs — they\'re our standard.',
  },
  {
    icon: Heart,
    title: 'Partnership Over Vendor',
    description: 'We embed with your team, learn your domain, and stay accountable long after launch. Your success is our reputation.',
  },
  {
    icon: Globe,
    title: 'Enterprise-Grade by Default',
    description: 'Security, scalability, and compliance are built in from day one — not bolted on as afterthoughts.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No black boxes. We explain every architectural decision, share every tradeoff, and keep you informed at every milestone.',
  },
  {
    icon: Award,
    title: 'Continuous Excellence',
    description: 'AI is moving fast. We invest relentlessly in staying ahead so your systems benefit from the latest breakthroughs.',
  },
]

const team = [
  {
    name: 'Mark',
    title: 'Chief Executive Officer',
    bio: 'Visionary leader with 15+ years in AI and enterprise transformation. Mark has led digital initiatives at Fortune 500 companies and founded two successful SaaS startups before building Dittra.',
    expertise: ['Strategic Planning', 'AI Innovation', 'Business Growth'],
    linkedin: '#',
  },
  {
    name: 'Rick',
    title: 'Chief Technology Officer',
    bio: 'Technology architect specializing in scalable AI systems. Rick has designed distributed systems serving millions of users and holds multiple patents in machine learning infrastructure.',
    expertise: ['System Architecture', 'AI/ML', 'Cloud Infrastructure'],
    linkedin: '#',
  },
  {
    name: 'Kevin',
    title: 'VP of Engineering',
    bio: 'Engineering expert driving innovation and technical excellence. Kevin leads a team of 30+ engineers and has shipped AI products used by 200+ enterprise customers globally.',
    expertise: ['Team Leadership', 'Product Development', 'DevOps'],
    linkedin: '#',
  },
  {
    name: 'Amit',
    title: 'Head of AI Research',
    bio: 'AI researcher pushing boundaries of machine learning. Amit holds a PhD in Computer Science from MIT and has published 20+ papers on NLP, computer vision, and agentic systems.',
    expertise: ['Machine Learning', 'NLP', 'Computer Vision'],
    linkedin: '#',
  },
]

const milestones = [
  { year: '2019', event: 'Dittra founded in Austin, TX with a vision to make enterprise AI accessible.' },
  { year: '2020', event: 'First 10 enterprise clients onboarded; deployed AI automation for Fortune 500 logistics firm.' },
  { year: '2021', event: 'Launched AI Agents platform — 50 agentic workflows in production within 6 months.' },
  { year: '2022', event: 'Series A funding secured. Expanded team to 60+ AI engineers and researchers.' },
  { year: '2023', event: 'Surpassed $1B in value unlocked across client portfolios. Opened EU operations.' },
  { year: '2024', event: '200+ AI agents deployed globally. Recognized as a Top AI Consultancy by Gartner.' },
]

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0A0F1C] dark:via-[#0B1324] dark:to-[#0A0F1C]" />
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-30" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/15 rounded-full blur-[120px]"
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
              Our Story
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block text-slate-900 dark:text-white">We Build AI That</span>
            <span className="block gradient-text">Actually Works</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Dittra was founded on a single belief: enterprise AI should deliver measurable results, not just impressive demos. We partner with ambitious organizations to make that belief a reality.
          </motion.p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative py-16 bg-slate-50 dark:bg-[#0B1324]">
        <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-15" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="cyber-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0A0F1C] dark:via-[#0B1324] dark:to-[#0A0F1C]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                To accelerate enterprise transformation through{' '}
                <span className="gradient-text">intelligent automation</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                We exist to close the gap between AI&apos;s potential and business reality. Too many organizations invest in AI initiatives that stall in pilot purgatory — powerful in demos, disappointing in production.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Dittra was built to change that. We bring together deep AI expertise, enterprise engineering rigor, and a relentless focus on ROI to deliver systems that perform at scale, day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="cyber-card p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <Eye className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      A world where every enterprise has access to AI that is genuinely useful — autonomous, reliable, and aligned with human judgment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Approach</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      We embed with your team, learn your domain deeply, and build AI that fits your workflows — not the other way around. Then we stay accountable for outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
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
              <Heart className="w-4 h-4" />
              What We Stand For
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our <span className="gradient-text">Core Values</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="cyber-card p-8 group hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-5">
                  <value.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
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
              Our <span className="gradient-text">Journey</span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

            <div className="space-y-10">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-[#0A0F1C] shadow-lg shadow-cyan-500/30 z-10" />

                  <div className={`pl-14 lg:pl-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:pr-10 lg:text-right' : 'lg:pl-10'}`}>
                    <div className="cyber-card p-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-1 block">{item.year}</span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
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
              <Users className="w-4 h-4" />
              Leadership
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Meet the <span className="gradient-text">Visionaries</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              World-class experts in AI, engineering, and enterprise transformation.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="cyber-card p-6 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-cyan-500/20">
                  {member.name[0]}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">{member.title}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.expertise.map(skill => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={member.linkedin}
                  className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-700 dark:from-cyan-700 dark:to-blue-800" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Build Something<br />Extraordinary?
            </h2>
            <p className="text-lg text-cyan-100 mb-10 max-w-2xl mx-auto">
              Join the enterprises already transforming their operations with Dittra&apos;s agentic AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#book-consultation"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cyan-700 shadow-lg hover:-translate-y-0.5 transition-all duration-200 hover:shadow-xl"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:border-white/70 hover:-translate-y-0.5 transition-all duration-200"
              >
                Join Our Team <Users className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
