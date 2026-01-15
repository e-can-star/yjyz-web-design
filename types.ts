export interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
}

export enum AuthView {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  SUCCESS = 'SUCCESS',
  CLOSED = 'CLOSED'
}

export interface Leader {
  name: string;
  title: string;
  image: string;
  description?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  views?: number;
  image?: string;
  tag?: string;
  summary?: string;
}

export interface Hall {
  id: number;
  title: string;
  image: string;
  department: string;
}

export interface Scenery {
  title: string;
  image: string;
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  caption?: string;
}
