import { CategoryMetrics } from '../types';

export const categoryMetrics: CategoryMetrics[] = [
  {
    category: 'Media Buying',
    description: 'Advanced media buying automation and analytics',
    features: [
      'Meta & Google Ads Integration',
      'Automated Performance Monitoring',
      'Smart Budget Allocation',
      'Cross-Platform Analytics',
      'Custom Alert System',
      'ROI Tracking',
      'A/B Testing Automation',
      'Audience Segmentation',
      'Creative Performance Analysis',
      'Automated Reporting'
    ],
    stats: {
      grossRevenue: '$29,918.55',
      conversionRate: '3.2%',
      newUsers: '1.2k',
      mrr: '$12,450',
      arr: '$149,400',
      pageVisits: '25.4k'
    },
    automations: [
      {
        title: 'Daily Performance Monitoring',
        trigger: 'Schedule (daily at 6 AM)',
        actions: [
          'Pull ad performance data via Google Ads API',
          'Pull ad performance data via Facebook Ads Insights API',
          'Store metrics in Google Sheets/Airtable',
          'Track: Spend, CTR, ROAS, CPM, CPA, Conversions'
        ]
      },
      {
        title: 'Low-Performer Detection',
        trigger: 'After pulling ad data',
        conditions: [
          'CPA > Target',
          'ROAS < Threshold',
          'CTR < X%'
        ],
        actions: [
          'Tag ad set as underperforming',
          'Log issue to Google Sheet',
          'Send Slack alert or email notification'
        ]
      },
      {
        title: 'Automated Pausing of Underperforming Ads',
        trigger: 'Low-performing flag detected',
        actions: [
          'Pause ad set via Google Ads API',
          'Pause ad set via Facebook Graph API',
          'Log changes to reporting sheet'
        ]
      },
      {
        title: 'Scaling Top Performers',
        trigger: 'After performance analysis',
        conditions: [
          'ROAS > X',
          'CPA < Target',
          'Spend < Daily Cap'
        ],
        actions: [
          'Increase budget by Y%',
          'Update changes in Google Sheet',
          'Send Slack notification'
        ]
      }
    ]
  },
  {
    category: 'Ecommerce',
    description: 'Complete solution for online stores with powerful automations',
    features: [
      'n8n automations for Shopify inventory sync',
      'Zapier integration for order processing',
      'Make.com workflows for customer service',
      'Automated email marketing sequences',
      'Multi-channel inventory sync',
      'Customer segmentation tools',
      'Abandoned cart recovery',
      'Dynamic pricing rules',
      'Automated fulfillment workflows',
      'Analytics dashboard with real-time metrics'
    ]
  },
  {
    category: 'Trading',
    description: 'Professional trading platform with advanced analytics',
    features: [
      'Real-time market data integration',
      'n8n automations for trade signals',
      'Multi-exchange API connections',
      'Automated risk management',
      'Portfolio rebalancing automation',
      'Custom indicator builder',
      'Backtesting environment',
      'Social trading features',
      'Advanced charting tools',
      'Automated trade journaling'
    ]
  },
  {
    category: 'Courses',
    description: 'Comprehensive learning management system',
    features: [
      'n8n automations for content delivery',
      'Zapier integration for student onboarding',
      'Automated progress tracking',
      'Interactive quiz system',
      'Course completion certificates',
      'Student engagement analytics',
      'Community features',
      'Assignment automation',
      'Learning path customization',
      'Integration with video platforms'
    ]
  },
  {
    category: 'Info Product',
    description: 'Digital content delivery and management system',
    features: [
      'n8n workflows for content updates',
      'Automated access management',
      'Dynamic content delivery',
      'Progress tracking system',
      'Engagement analytics',
      'Drip content automation',
      'Member portal customization',
      'Content protection system',
      'Automated email sequences',
      'Integration with payment systems'
    ]
  },
  {
    category: 'Webinar Funnel',
    description: 'End-to-end webinar marketing automation',
    features: [
      'n8n automations for registration',
      'Zapier workflows for follow-ups',
      'Email sequence automation',
      'Attendance tracking',
      'Automated replay delivery',
      'Landing page templates',
      'Real-time analytics',
      'Integration with CRM systems',
      'Automated reminder system',
      'Lead scoring automation'
    ]
  },
  {
    category: 'Copywriting',
    description: 'Professional content creation and optimization suite',
    features: [
      'n8n workflows for content distribution',
      'A/B testing automation',
      'SEO optimization tools',
      'Content performance tracking',
      'Automated publishing system',
      'Team collaboration tools',
      'Version control system',
      'Client feedback automation',
      'Content calendar automation',
      'Analytics integration'
    ]
  }
];