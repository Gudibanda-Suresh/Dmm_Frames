import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  as: Tag = motion.div,
  ...props
}) {
  return (
    <Tag
      className={`glass-panel rounded-3xl ${
        hover ? 'transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
