'use client';

import { motion } from 'framer-motion';

interface RealScoutAdvancedSearchWidgetProps {
  agentEncodedId?: string;
  className?: string;
}

export default function RealScoutAdvancedSearchWidget({
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  className = '',
}: RealScoutAdvancedSearchWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-advanced-search-container ${className}`}
    >
      {/* RealScout Advanced Search Web Component */}
      {/* @ts-ignore - RealScout web component */}
      <realscout-advanced-search
        agent-encoded-id={agentEncodedId}
      />
    </motion.div>
  );
}
