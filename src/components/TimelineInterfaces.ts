export interface TimelineItem {
    cardTitle: string;
    title: string;
    cardSubtitle: string;
    cardDetailedText: string;
    image: string;
    items?: Array<{ title: string; description: string; startDate: string; endDate: string }>;
    tags?: string[];
  }
