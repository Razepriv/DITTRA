'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { 
  TrendingUp, 
  Users, 
  Rocket, 
  GitBranch, 
  Target 
} from 'lucide-react'
import { motion } from 'framer-motion'

export function ServiceShowcase() {
  return (
    <ScrollSection id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text tracking-tight">
            Transformative Solutions
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            End-to-end AI capabilities designed to accelerate your business
          </p>
        </motion.div>

        <div className="space-y-32 lg:space-y-40">
          {/* AI for Finance */}
          <ServiceCard
            icon={<TrendingUp className="w-12 h-12 text-primary-400" strokeWidth={1.5} />}
            title="Financial Intelligence, Amplified"
            description="Transform financial operations with predictive analytics, automated reporting, and risk management AI that sees patterns humans miss."
            benefits={[
              'Predictive cash flow modeling',
              'Automated financial reporting',
              'Fraud detection & risk analysis',
              'Real-time market insights',
            ]}
            ctaText="Discover Financial AI Solutions"
            ctaLink="/services/ai-finance"
            layout="left"
            visual={
              <div className="relative h-80 rounded-2xl cyber-card p-10 flex items-center justify-center overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-cyber/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-7xl font-bold gradient-text mb-6 tracking-tight"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    $2.4M
                  </motion.div>
                  <p className="text-gray-300 text-lg uppercase tracking-wider">Average Annual Savings</p>
                </div>
              </div>
            }
          />

          {/* AI for Sales */}
          <ServiceCard
            icon={<Users className="w-12 h-12 text-cyber" strokeWidth={1.5} />}
            title="Sales Acceleration Through Intelligence"
            description="Empower your sales team with AI-driven insights, predictive lead scoring, and automated workflows that close deals faster."
            benefits={[
              'Intelligent lead prioritization',
              'Predictive sales forecasting',
              'Automated customer outreach',
              'Conversation intelligence',
            ]}
            ctaText="Transform Your Sales Process"
            ctaLink="/services/ai-sales"
            layout="right"
            visual={
              <div className="relative h-80 rounded-2xl cyber-card p-10 flex items-center justify-center overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyber/10 to-tech/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-7xl font-bold gradient-text mb-6 tracking-tight"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    300%
                  </motion.div>
                  <p className="text-gray-300 text-lg uppercase tracking-wider">Increase in Qualified Leads</p>
                </div>
              </div>
            }
          />

          {/* Technology Accelerator */}
          <ServiceCard
            icon={<Rocket className="w-12 h-12 text-tech" strokeWidth={1.5} />}
            title="Accelerate Innovation at Scale"
            description="Cut development time by 70% with our AI-powered development tools, automated testing, and intelligent code optimization."
            benefits={[
              'Rapid prototyping & deployment',
              'AI-assisted development',
              'Automated quality assurance',
              'Legacy system modernization',
            ]}
            ctaText="Accelerate Your Tech Stack"
            ctaLink="/services/technology-accelerator"
            layout="left"
            visual={
              <div className="relative h-80 rounded-2xl cyber-card p-10 flex items-center justify-center overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-tech/10 to-primary-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 7, repeat: Infinity }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-7xl font-bold gradient-text mb-6 tracking-tight"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    70%
                  </motion.div>
                  <p className="text-gray-300 text-lg uppercase tracking-wider">Faster Development Time</p>
                </div>
              </div>
            }
          />

          {/* End-to-End Solutions */}
          <ServiceCard
            icon={<GitBranch className="w-12 h-12 text-primary-400" strokeWidth={1.5} />}
            title="Complete Transformation Journeys"
            description="From strategy to implementation to optimization - we orchestrate your entire AI transformation with precision and expertise."
            benefits={[
              'Discovery & Strategy',
              'Design & Architecture',
              'Development & Integration',
              'Deployment & Training',
            ]}
            ctaText="Start Your Transformation"
            ctaLink="/services/end-to-end-solutions"
            layout="right"
            visual={
              <div className="relative h-80 rounded-2xl cyber-card p-10 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {[1, 2, 3, 4].map((step) => (
                    <motion.div
                      key={step}
                      className="w-24 h-24 rounded-2xl neon-border bg-gray-900/50 backdrop-blur-xl flex items-center justify-center text-3xl font-bold gradient-text"
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: step * 0.5
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step}
                    </motion.div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Strategic Consulting */}
          <ServiceCard
            icon={<Target className="w-12 h-12 text-cyber" strokeWidth={1.5} />}
            title="Strategic Vision Meets Technical Excellence"
            description="Navigate complex AI landscapes with consultants who combine deep technical expertise with strategic business acumen."
            benefits={[
              'AI readiness assessment',
              'Technology roadmap development',
              'Change management',
              'ROI optimization',
            ]}
            ctaText="Schedule Strategic Consultation"
            ctaLink="/services/strategic-consulting"
            layout="left"
            visual={
              <div className="relative h-80 rounded-2xl cyber-card p-10 flex items-center justify-center overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-tech/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-6xl font-bold mb-6 gradient-text tracking-tight"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    Premium
                  </motion.div>
                  <p className="text-gray-300 text-lg uppercase tracking-wider">Strategic Partnership</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </ScrollSection>
  )
}
