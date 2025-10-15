export interface TimelineEvent{
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    logo: Logo;
}

interface Logo{
    src: string;
    alt: string;
    width: number;
}