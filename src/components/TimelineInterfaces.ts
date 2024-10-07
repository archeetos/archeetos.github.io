export interface TimelineItem {
  cardTitle: string;
  title: string;
  cardSubtitle: string;
  timeframe: string;
  cardDetailedText: string;
  image: string;
  icon: string;
  items?: Array<{
    title: string;
    description: string;
    startDate: string;
    endDate: string;
  }>;
  tags?: string[];
}
