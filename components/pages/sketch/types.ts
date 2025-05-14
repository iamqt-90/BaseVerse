export interface HeaderProps {
    date: string;
  }
  
  export interface ArtworkCardProps {
    title: string;
    tags: string[];
    description: string;
    interpretation: string;
    imageSrc: string;
  }
  
  export interface DetailsSidebarProps {
    artworkDetails: {
      technique: string;
      tools: string[];
      creationTime: string;
      colors: string[];
    };
    dreamDetails: {
      timeOfNight: string;
      sleepQuality: string;
      dreamSigns: string[];
    };
    emotions: string[];
  }
  