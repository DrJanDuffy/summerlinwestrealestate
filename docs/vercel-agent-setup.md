# Vercel Agent Configuration for Summerlin West Real Estate

## Overview
This document outlines the comprehensive Vercel Agent configuration for automated code reviews on the Summerlin West Real Estate website, including monitoring, cost tracking, and real estate domain-specific rules.

## Quick Start

### 1. Enable Vercel Agent
- Go to Vercel Dashboard → Agent tab
- Click "Enable"
- Configure: Private repos only, Skip draft PRs, $100 monthly budget

### 2. Create Test PR
- Branch: `test-vercel-agent-integration`
- PR Link: https://github.com/DrJanDuffy/summerlinwestrealestate/pull/new/test-vercel-agent-integration
- Test Endpoint: `/api/test-vercel-agent`

### 3. Monitor Usage
- Dashboard: `/api/vercel-agent-monitoring`
- Cost Tracking: $0.30 per review + token costs
- Monthly Budget: $100 with auto-recharge at $10

## Configuration Files

### Enhanced Configuration
- **`.vercel-agent-enhanced.json`**: Comprehensive rules for real estate development
- **`.vercel-agent.json`**: Basic configuration (backup)
- **`docs/vercel-agent-monitoring.md`**: Monitoring and cost tracking guide

### Key Features
- **Real Estate Rules**: RealScout integration, lead tracking, SEO validation
- **TypeScript Excellence**: Strict type checking, interface validation
- **Security**: Cron job security, API authentication, XSS prevention
- **Performance**: Core Web Vitals, image optimization, bundle size
- **SEO**: Metadata completeness, structured data, hyperlocal optimization
- **Accessibility**: ARIA labels, semantic HTML, WCAG compliance

## Real Estate Specific Rules

### RealScout Integration
- Validate API integrations and prop types
- Check `priceMin`/`priceMax` types (strings for OfficeListings, numbers for others)
- Monitor widget loading and JavaScript errors
- Validate lead capture form submissions

### Lead Tracking
- Ensure proper `LeadEvent` interface compliance
- Validate event types: `consultation_request`, `form_submission`, etc.
- Check lead source and type validation
- Monitor conversion tracking

### SEO Optimization
- Validate metadata completeness (title, description, canonical)
- Check structured data implementation (JSON-LD)
- Ensure proper Open Graph and Twitter cards
- Validate hyperlocal keyword implementation

### Performance Monitoring
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- Image optimization with Next.js Image component
- Bundle size monitoring and code splitting
- API response time tracking

## Monitoring Dashboard

### Usage Metrics
- **Reviews Completed**: Number of PR reviews processed
- **Issues Detected**: Security, performance, code quality issues
- **Suggestions Applied**: Percentage of suggestions implemented
- **Success Rate**: Percentage of successful reviews

### Cost Tracking
- **Fixed Costs**: $0.30 per review
- **Token Usage**: Based on code complexity
- **Monthly Spend**: Track against $100 budget
- **Budget Remaining**: Real-time cost monitoring

### Quality Metrics
- **Security Vulnerabilities**: Critical, high, medium, low severity
- **Performance Issues**: Core Web Vitals, bundle size
- **TypeScript Errors**: Type mismatches, interface violations
- **Real Estate Issues**: RealScout, lead tracking, SEO problems

## API Endpoints

### Test Endpoint
```bash
# Test Vercel Agent functionality
curl https://summerlinwestrealestate.com/api/test-vercel-agent

# Test POST endpoint
curl -X POST https://summerlinwestrealestate.com/api/test-vercel-agent \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'
```

### Monitoring Endpoint
```bash
# Get Vercel Agent metrics
curl https://summerlinwestrealestate.com/api/vercel-agent-monitoring

# Update monitoring preferences
curl -X POST https://summerlinwestrealestate.com/api/vercel-agent-monitoring \
  -H "Content-Type: application/json" \
  -d '{"alertThreshold":80,"monthlyBudget":100}'
```

### Cron Job Endpoints
```bash
# Daily market data refresh
curl -H "Authorization: Bearer $CRON_SECRET" \
  https://summerlinwestrealestate.com/api/cron/market-data

# Weekly sitemap update
curl -H "Authorization: Bearer $CRON_SECRET" \
  https://summerlinwestrealestate.com/api/cron/sitemap-update

# Monthly report generation
curl -H "Authorization: Bearer $CRON_SECRET" \
  https://summerlinwestrealestate.com/api/cron/monthly-reports
```

## Cost Management

### Budget Configuration
- **Monthly Limit**: $100
- **Auto-Recharge**: $50 when balance < $10
- **Alert Threshold**: $80 (80% of budget)

### Optimization Strategies
- **Skip Draft PRs**: Reduce unnecessary reviews
- **Focus on Critical**: Prioritize security and performance
- **Batch Reviews**: Group related changes
- **Custom Rules**: Target real estate domain issues

### Cost Tracking
```bash
# Get Vercel usage data
curl https://api.vercel.com/v1/usage \
  -H "Authorization: Bearer $VERCEL_TOKEN"
```

## Best Practices

### For Developers
1. **Review All Suggestions**: Don't ignore Vercel Agent recommendations
2. **Apply Critical Fixes**: Prioritize security and performance issues
3. **Learn Patterns**: Understand common issues to avoid them
4. **Document Changes**: Track improvements for ROI measurement

### For Real Estate Domain
1. **MLS Integration**: Ensure RealScout props are correct
2. **Lead Quality**: Validate lead capture forms
3. **SEO Compliance**: Check metadata completeness
4. **Performance**: Monitor Core Web Vitals

## Troubleshooting

### Common Issues
- **High Costs**: Review frequency and complexity settings
- **False Positives**: Adjust rule sensitivity
- **Missing Issues**: Update custom rules
- **Performance Impact**: Optimize review scope

### Getting Help
- **Vercel Support**: For technical issues
- **Documentation**: Vercel Agent guides
- **Community**: Vercel Discord and forums
- **Custom Rules**: Adjust for real estate domain

## Integration with Existing Tools

### Google Analytics
- Track Vercel Agent impact on site performance
- Monitor user experience improvements
- Measure conversion rate changes

### Google Search Console
- Track SEO improvements from Vercel Agent suggestions
- Monitor Core Web Vitals improvements
- Track indexing and ranking changes

### RealScout Analytics
- Monitor RealScout integration improvements
- Track lead generation improvements
- Measure property listing performance

## Updates

This configuration is regularly updated to:
- Add new real estate domain rules
- Improve TypeScript validation
- Enhance security checks
- Optimize performance monitoring
- Update cost tracking methods

Last updated: $(date)
