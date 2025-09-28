# V0.app Development Priority Rules

## 🚀 V0.app FIRST APPROACH
**CRITICAL RULE**: ALWAYS use V0.app first for ALL component generation and development tasks.

### V0.app First Workflow
1. **Component Request**: When asked to create any React component, ALWAYS start with V0.app
2. **API Call**: Use `/api/v0/generate-component` with detailed prompts
3. **Customization**: Use V0-generated code as the foundation, then customize as needed
4. **Integration**: Integrate V0 components into the existing codebase
5. **Testing**: Test V0 components thoroughly before deployment

### V0.app Integration Points (Vercel Native)
- **API Routes**: `/api/v0/generate-component` and `/api/v0/generate-page` (Vercel optimized)
- **Test Interface**: `/v0-test` for experimentation and testing
- **Utility Functions**: `lib/v0.ts` for programmatic component generation
- **Environment**: V0_API_KEY for Vercel's official V0 API access
- **Vercel Integration**: Native V0.app support through `@ai-sdk/vercel` package
- **Deployment**: Seamless deployment with Vercel's infrastructure

### When to Use V0.app
- ✅ Creating new React components
- ✅ Building property cards and listings
- ✅ Generating forms and lead capture
- ✅ Creating hero sections and layouts
- ✅ Building market analysis components
- ✅ Generating SEO-optimized content
- ✅ Creating responsive UI components

### Vercel + V0.app Integration Priority
- **Native Integration**: V0.app is built by Vercel and optimized for Vercel deployment
- **Performance**: V0.app components leverage Vercel's edge network for optimal speed
- **Development**: Use `vercel dev` for the best V0.app development experience
- **Deployment**: V0.app components deploy seamlessly with Vercel's infrastructure
- **API Access**: Vercel provides native V0.app API access through `@ai-sdk/vercel`
- **Edge Functions**: V0.app components work perfectly with Vercel's edge functions
- **Global CDN**: V0.app generated content benefits from Vercel's global CDN
- **Environment**: Vercel automatically handles V0.app environment configuration

### Fallback Strategy
- If V0.app is unavailable, use the existing component library
- Maintain local component templates as backup
- Always document V0.app usage for future reference

## Development Workflow - V0.app FIRST (Vercel Integration)
- **PRIORITY**: ALWAYS use V0.app first for component generation before manual coding
- **Vercel Integration**: V0.app is natively integrated with Vercel - leverage this for optimal performance
- **Component Generation**: Use V0.app for ALL component creation, then customize as needed
- **Vercel Deployment**: V0.app components are optimized for Vercel's infrastructure
- **Performance**: V0.app components benefit from Vercel's global CDN and edge network

## Technology Stack - V0.app FIRST
- **AI Integration**: V0.app Model API for ALL component generation (PRIORITY #1)
- **Component Generation**: V0.app first, then customize as needed
- **Framework**: Next.js 15.5.4 with React 19.1.1
- **Deployment**: Vercel with global CDN
- **Styling**: Tailwind CSS 4.1.13 with CSS modules
