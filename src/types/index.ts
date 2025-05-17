export interface Template {
  id: string;
  title: string;
  description: string;
  category: 'Trading' | 'Info Product' | 'Courses' | 'Webinar Funnel' | 'Ecommerce' | 'Copywriting' | 'Media Buying';
  image: string;
  popular?: boolean;
  features?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  automations?: {
    title: string;
    trigger: string;
    actions: string[];
    conditions?: string[];
  }[];
}

export interface CategoryMetrics {
  category: string;
  description: string;
  features: string[];
  stats?: {
    grossRevenue: string;
    conversionRate: string;
    newUsers: string;
    mrr: string;
    arr: string;
    pageVisits: string;
  };
  automations?: {
    title: string;
    trigger: string;
    actions: string[];
    conditions?: string[];
  }[];
}