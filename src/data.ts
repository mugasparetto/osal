export interface Weapon {
  id: string;
  title: string;
  image: string;
  description: string;
  components: Component[];
}

export interface Component {
  id: string;
  title: string;
  country: string;
  company: string;
  location: string;
}

export interface Children {
  name?: string;
  company?: string;
  location?: string;
  address?: string;
  lat_long?: string;
}
