export interface IAcademias {
  current_country_id: number;
  locations: ILocation[];
  wp_total: number;
  total: number;
  success: boolean;
}

export interface ILocation {
  id: number;
  title: string;
  content?: string;
  opened?: boolean;
  mask?: string;
  towel?: string;
  fountain?: string;
  locker_room?: string;
  schedules?: ISchedule[];
  street?: string;
  region?: string;
  city_name?: string;
  state_name?: string;
  uf?: string;
}

export interface ISchedule {
  weekdays: string;
  hour: string;
}
