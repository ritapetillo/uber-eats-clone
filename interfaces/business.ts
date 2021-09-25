export interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories?: CategoriesEntity[] | null;
  rating: number;
  location: Location;
  coordinates: Coordinates;
  photos?: string[] | null;
  price: string;
  hours?: HoursEntity[] | null;
  transactions?: null[] | null;
  special_hours?: SpecialHoursEntity[] | null;
}
export interface CategoriesEntity {
  alias: string;
  title: string;
}
export interface Location {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address?: string[] | null;
  cross_streets: string;
}
export interface Coordinates {
  latitude: number;
  longitude: number;
}
export interface HoursEntity {
  open?: OpenEntity[] | null;
  hours_type: string;
  is_open_now: boolean;
}
export interface OpenEntity {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}
export interface SpecialHoursEntity {
  date: string;
  is_closed?: null;
  start: string;
  end: string;
  is_overnight: boolean;
}
