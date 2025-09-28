'use client';

import { motion } from 'framer-motion';

interface RealScoutSimpleSearchProps {
  agentEncodedId?: string;
  className?: string;
}

export default function RealScoutSimpleSearch({
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  className = '',
}: RealScoutSimpleSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-simple-search-container ${className}`}
    >
      {/* RealScout Simple Search Web Component */}
      {/* @ts-ignore - RealScout web component */}
      <realscout-simple-search
        agent-encoded-id={agentEncodedId}
      />
    </motion.div>
  );
}
