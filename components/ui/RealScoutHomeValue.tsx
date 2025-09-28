'use client';

import { motion } from 'framer-motion';

interface RealScoutHomeValueProps {
  agentEncodedId?: string;
  className?: string;
}

export default function RealScoutHomeValue({
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  className = '',
}: RealScoutHomeValueProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-home-value-container ${className}`}
    >
      {/* RealScout Home Value Web Component */}
      {/* @ts-ignore - RealScout web component */}
      <realscout-home-value
        agent-encoded-id={agentEncodedId}
      />
    </motion.div>
  );
}
