import { Logo } from "./Logo";

export interface TimelineEvent{
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    logo: Logo;
}