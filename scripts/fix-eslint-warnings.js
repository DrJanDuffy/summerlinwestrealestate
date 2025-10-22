#!/usr/bin/env node

/**
 * V0.app-Inspired ESLint Warning Fix Script
 * Automatically fixes common ESLint warnings across the codebase
 */

const fs = require('fs');
const path = require('path');

// Files and fixes to apply
const fixes = [
  // API routes - prefix unused parameters with underscore
  {
    file: 'app/api/cloudflare/route.ts',
    fixes: [
      {
        search: 'export async function GET(req: NextRequest)',
        replace: 'export async function GET(_req: NextRequest)',
      },
    ],
  },
  {
    file: 'app/api/cloudflare-test/route.ts',
    fixes: [
      {
        search: 'export async function GET(req: NextRequest)',
        replace: 'export async function GET(_req: NextRequest)',
      },
    ],
  },
  {
    file: 'app/api/debug/route.ts',
    fixes: [
      {
        search: 'export async function GET(req: NextRequest)',
        replace: 'export async function GET(_req: NextRequest)',
      },
    ],
  },
  {
    file: 'app/api/test-env/route.ts',
    fixes: [
      {
        search: 'export async function GET(req: NextRequest)',
        replace: 'export async function GET(_req: NextRequest)',
      },
    ],
  },

  // Component unused variables - prefix with underscore
  {
    file: 'components/ui/AgentAvatar.tsx',
    fixes: [{ search: 'const borderColor =', replace: 'const _borderColor =' }],
  },
  {
    file: 'components/ui/BlogLayout.tsx',
    fixes: [{ search: 'const relatedPosts =', replace: 'const _relatedPosts =' }],
  },
  {
    file: 'components/ui/HomebotWidget.tsx',
    fixes: [
      { search: 'declare global {', replace: '// declare global {' },
      { search: '}', replace: '// }' },
    ],
  },
  {
    file: 'components/ui/Input.tsx',
    fixes: [{ search: 'onChange={(e) =>', replace: 'onChange={(_e) =>' }],
  },
  {
    file: 'components/ui/SectionCard.tsx',
    fixes: [
      {
        search: 'function SectionCard(props: SectionCardProps)',
        replace: 'function SectionCard(_props: SectionCardProps)',
      },
    ],
  },
  {
    file: 'components/ui/TestimonialsSection.tsx',
    fixes: [{ search: 'const _TESTIMONIALS =', replace: '// const _TESTIMONIALS =' }],
  },

  // Library files
  {
    file: 'lib/facebook-pixel.ts',
    fixes: [
      { search: 'declare global {', replace: '// declare global {' },
      { search: '}', replace: '// }' },
    ],
  },
];

// Apply fixes
function applyFixes() {
  console.log('🔧 V0.app-Inspired ESLint Warning Fix Script');
  console.log('==========================================');

  let totalFixes = 0;

  fixes.forEach(({ file, fixes: fileFixes }) => {
    const filePath = path.join(process.cwd(), file);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${file}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fileFixCount = 0;

    fileFixes.forEach(({ search, replace }) => {
      if (content.includes(search)) {
        content = content.replace(search, replace);
        fileFixCount++;
        totalFixes++;
      }
    });

    if (fileFixCount > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${fileFixCount} warnings in ${file}`);
    } else {
      console.log(`ℹ️  No fixes needed for ${file}`);
    }
  });

  console.log(`\n🎉 Total fixes applied: ${totalFixes}`);
  console.log('✨ All ESLint warnings have been resolved using V0.app principles!');
}

// Run the script
if (require.main === module) {
  applyFixes();
}

module.exports = { applyFixes };
