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

export const weapons: Weapon[] = [
  {
    id: 'w1',
    title: 'Hellfire Missile',
    image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    description:
      'The Hellfire AGM-114 missile, made by Lockheed Martin, is a laser-guided anti-tank missile meant to be fired from helicopters and drones. They are qualified for use on Israeli-used aircraft such as the Boeing AH-64 Apache and the Sikorsky UH-60 Black Hawk.There are different variants of Hellfire missiles. Main- stream media and pundits have criticized Russia for its use of thermobaric weapons in Ukraine. Similar weaponry is also used in Gaza .',
    components: [
      {
        id: 'c1',
        title: 'Thermal Battery',
        country: 'United States',
        company: 'EaglePitcher LLC',
        location: 'Joplin, MO',
      },
      {
        id: 'c2',
        title: 'Sanding',
        country: 'United States',
        company: 'Aerobotix Inc.',
        location: 'Madison, AL',
      },
      {
        id: 'c3',
        title: 'Supply',
        country: 'United States',
        company: 'Marotta Controls Inc.',
        location: 'Montville, NJ',
      },
      {
        id: 'c4',
        title: 'Light Filter',
        country: 'United States',
        company: 'Viavi Solutions Inc.',
        location: 'Scottsdale, AZ',
      },
      {
        id: 'c5',
        title: 'Launch Shoe rear',
        country: 'United States',
        company: 'Midwest Precision LLC',
        location: 'Eastlake, OH',
      },
      {
        id: 'c6',
        title: 'Acceleration switch',
        country: 'United States',
        company: 'CIRCOR Aerospace Inc.',
        location: 'Corona, CA',
      },
      {
        id: 'c7',
        title: 'Housing Guide',
        country: 'United States',
        company: 'Uni-Cast LLC',
        location: 'Lononderry, NH',
      },
      {
        id: 'c8',
        title: 'Warhead',
        country: 'United States',
        company: 'Chmiede Corportation',
        location: 'Tullahome, TN',
      },
      {
        id: 'c9',
        title: 'Control Section',
        country: 'United States',
        company: 'Moog Inc.',
        location: 'Erie County, NY',
      },
    ],
  },
  {
    id: 'w2',
    title: 'GBU-39 Small Diameter Bomb',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    description:
      'The GBU-39 Small Diameter Bomb, made by Lockheed Martin, is a laser-guided anti-tank missile meant to be fired from helicopters and drones. They are qualified for use on Israeli-used aircraft such as the Boeing AH-64 Apache and the Sikorsky UH-60 Black Hawk.There are different variants of Hellfire missiles. Main- stream media and pundits have criticized Russia for its use of thermobaric weapons in Ukraine. Similar weaponry is also used in Gaza .',
    components: [
      {
        id: 'c1',
        title: 'Thermal Battery',
        country: 'United States',
        company: 'EaglePitcher LLC',
        location: 'Joplin, MO',
      },
      {
        id: 'c2',
        title: 'Sanding',
        country: 'United States',
        company: 'Aerobotix Inc.',
        location: 'Madison, AL',
      },
      {
        id: 'c3',
        title: 'Supply',
        country: 'United States',
        company: 'Marotta Controls Inc.',
        location: 'Montville, NJ',
      },
      {
        id: 'c4',
        title: 'Light Filter',
        country: 'United States',
        company: 'Viavi Solutions Inc.',
        location: 'Scottsdale, AZ',
      },
      {
        id: 'c5',
        title: 'Launch Shoe rear',
        country: 'United States',
        company: 'Midwest Precision LLC',
        location: 'Eastlake, OH',
      },
      {
        id: 'c6',
        title: 'Acceleration switch',
        country: 'United States',
        company: 'CIRCOR Aerospace Inc.',
        location: 'Corona, CA',
      },
      {
        id: 'c7',
        title: 'Housing Guide',
        country: 'United States',
        company: 'Uni-Cast LLC',
        location: 'Lononderry, NH',
      },
      {
        id: 'c8',
        title: 'Warhead',
        country: 'United States',
        company: 'Chmiede Corportation',
        location: 'Tullahome, TN',
      },
      {
        id: 'c9',
        title: 'Control Section',
        country: 'United States',
        company: 'Moog Inc.',
        location: 'Erie County, NY',
      },
    ],
  },
  {
    id: 'w3',
    title: 'Joint Light Tactical Vehicle',
    image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    description:
      'The Joint Light Tactical Vehicle, made by Lockheed Martin, is a laser-guided anti-tank missile meant to be fired from helicopters and drones. They are qualified for use on Israeli-used aircraft such as the Boeing AH-64 Apache and the Sikorsky UH-60 Black Hawk.There are different variants of Hellfire missiles. Main- stream media and pundits have criticized Russia for its use of thermobaric weapons in Ukraine. Similar weaponry is also used in Gaza .',
    components: [
      {
        id: 'c1',
        title: 'Thermal Battery',
        country: 'United States',
        company: 'EaglePitcher LLC',
        location: 'Joplin, MO',
      },
      {
        id: 'c2',
        title: 'Sanding',
        country: 'United States',
        company: 'Aerobotix Inc.',
        location: 'Madison, AL',
      },
      {
        id: 'c3',
        title: 'Supply',
        country: 'United States',
        company: 'Marotta Controls Inc.',
        location: 'Montville, NJ',
      },
      {
        id: 'c4',
        title: 'Light Filter',
        country: 'United States',
        company: 'Viavi Solutions Inc.',
        location: 'Scottsdale, AZ',
      },
      {
        id: 'c5',
        title: 'Launch Shoe rear',
        country: 'United States',
        company: 'Midwest Precision LLC',
        location: 'Eastlake, OH',
      },
      {
        id: 'c6',
        title: 'Acceleration switch',
        country: 'United States',
        company: 'CIRCOR Aerospace Inc.',
        location: 'Corona, CA',
      },
      {
        id: 'c7',
        title: 'Housing Guide',
        country: 'United States',
        company: 'Uni-Cast LLC',
        location: 'Lononderry, NH',
      },
      {
        id: 'c8',
        title: 'Warhead',
        country: 'United States',
        company: 'Chmiede Corportation',
        location: 'Tullahome, TN',
      },
      {
        id: 'c9',
        title: 'Control Section',
        country: 'United States',
        company: 'Moog Inc.',
        location: 'Erie County, NY',
      },
      {
        id: 'c10',
        title: 'Thermal Battery',
        country: 'United States',
        company: 'EaglePitcher LLC',
        location: 'Joplin, MO',
      },
      {
        id: 'c11',
        title: 'Sanding',
        country: 'United States',
        company: 'Aerobotix Inc.',
        location: 'Madison, AL',
      },
      {
        id: 'c12',
        title: 'Supply',
        country: 'United States',
        company: 'Marotta Controls Inc.',
        location: 'Montville, NJ',
      },
      {
        id: 'c13',
        title: 'Light Filter',
        country: 'United States',
        company: 'Viavi Solutions Inc.',
        location: 'Scottsdale, AZ',
      },
      {
        id: 'c14',
        title: 'Launch Shoe rear',
        country: 'United States',
        company: 'Midwest Precision LLC',
        location: 'Eastlake, OH',
      },
      {
        id: 'c15',
        title: 'Acceleration switch',
        country: 'United States',
        company: 'CIRCOR Aerospace Inc.',
        location: 'Corona, CA',
      },
      {
        id: 'c16',
        title: 'Housing Guide',
        country: 'United States',
        company: 'Uni-Cast LLC',
        location: 'Lononderry, NH',
      },
      {
        id: 'c17',
        title: 'Warhead',
        country: 'United States',
        company: 'Chmiede Corportation',
        location: 'Tullahome, TN',
      },
      {
        id: 'c18',
        title: 'Control Section',
        country: 'United States',
        company: 'Moog Inc.',
        location: 'Erie County, NY',
      },
      {
        id: 'c19',
        title: 'Thermal Battery',
        country: 'United States',
        company: 'EaglePitcher LLC',
        location: 'Joplin, MO',
      },
      {
        id: 'c20',
        title: 'Sanding',
        country: 'United States',
        company: 'Aerobotix Inc.',
        location: 'Madison, AL',
      },
    ],
  },
  {
    id: 'w4',
    title: 'F-45',
    image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    description:
      'The F-45 wings, made by Lockheed Martin, is a laser-guided anti-tank missile meant to be fired from helicopters and drones. They are qualified for use on Israeli-used aircraft such as the Boeing AH-64 Apache and the Sikorsky UH-60 Black Hawk.There are different variants of Hellfire missiles. Main- stream media and pundits have criticized Russia for its use of thermobaric weapons in Ukraine. Similar weaponry is also used in Gaza .',
    components: [
      {
        id: 'c1',
        title: 'Thermal Battery',
        country: 'United States',
        company: 'EaglePitcher LLC',
        location: 'Joplin, MO',
      },
      {
        id: 'c2',
        title: 'Sanding',
        country: 'United States',
        company: 'Aerobotix Inc.',
        location: 'Madison, AL',
      },
      {
        id: 'c3',
        title: 'Supply',
        country: 'United States',
        company: 'Marotta Controls Inc.',
        location: 'Montville, NJ',
      },
      {
        id: 'c4',
        title: 'Light Filter',
        country: 'United States',
        company: 'Viavi Solutions Inc.',
        location: 'Scottsdale, AZ',
      },
      {
        id: 'c5',
        title: 'Launch Shoe rear',
        country: 'United States',
        company: 'Midwest Precision LLC',
        location: 'Eastlake, OH',
      },
      {
        id: 'c6',
        title: 'Acceleration switch',
        country: 'United States',
        company: 'CIRCOR Aerospace Inc.',
        location: 'Corona, CA',
      },
      {
        id: 'c7',
        title: 'Housing Guide',
        country: 'United States',
        company: 'Uni-Cast LLC',
        location: 'Lononderry, NH',
      },
      {
        id: 'c8',
        title: 'Warhead',
        country: 'United States',
        company: 'Chmiede Corportation',
        location: 'Tullahome, TN',
      },
      {
        id: 'c9',
        title: 'Control Section',
        country: 'United States',
        company: 'Moog Inc.',
        location: 'Erie County, NY',
      },
    ],
  },
];

export const fetchWeaponData = (id: string) => weapons.find(weapon => weapon.id === id)