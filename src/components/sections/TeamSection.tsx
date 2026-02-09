'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { useState } from 'react'

const team = [
  {
    name: 'Mark',
    title: 'Chief Executive Officer',
    image: 'M',
    bio: 'Visionary leader with 15+ years in AI and enterprise transformation',
    expertise: ['Strategic Planning', 'AI Innovation', 'Business Growth'],
    linkedin: '#',
  },
  {
    name: 'Rick',
    title: 'Chief Technology Officer',
    image: 'R',
    bio: 'Technology architect specializing in scalable AI systems',
    expertise: ['System Architecture', 'AI/ML', 'Cloud Infrastructure'],
    linkedin: '#',
  },
  {
    name: 'Kevin',
    title: 'VP of Engineering',
    image: 'K',
    bio: 'Engineering expert driving innovation and technical excellence',
    expertise: ['Team Leadership', 'Product Development', 'DevOps'],
    linkedin: '#',
  },
  {
    name: 'Amit',
    title: 'Head of AI Research',
    image: 'A',
    bio: 'AI researcher pushing boundaries of machine learning',
    expertise: ['Machine Learning', 'NLP', 'Computer Vision'],
    linkedin: '#',
  },
]

export function TeamSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <ScrollSection id="team" className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900">
            <span className="gradient-text">Meet the Visionaries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            World-class team combining deep technical expertise with business acumen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="relative h-96 cursor-pointer perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setFlippedCard(index)}
              onHoverEnd={() => setFlippedCard(null)}
            >
              <AnimatePresence mode="wait">
                {flippedCard !== index ? (
                  // Front of card
                  <motion.div
                    key="front"
                    className="absolute inset-0"
                    initial={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard className="h-full flex flex-col items-center justify-center text-center">
                      {/* Avatar */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-cyber flex items-center justify-center text-4xl font-bold text-white mb-6">
                        {member.image}
                      </div>

                      {/* Name & Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary mb-4">{member.title}</p>

                      <p className="text-sm text-gray-600">
                        Hover to learn more
                      </p>
                    </GlassCard>
                  </motion.div>
                ) : (
                  // Back of card
                  <motion.div
                    key="back"
                    className="absolute inset-0"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-700 mb-4">
                          {member.bio}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-2">
                            Expertise:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <a
                        href={member.linkedin}
                        className="flex items-center justify-center gap-2 text-gray-900 hover:text-primary transition-colors py-2 border-t border-gray-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm">Connect on LinkedIn</span>
                      </a>
                    </GlassCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSection>
  )
}
