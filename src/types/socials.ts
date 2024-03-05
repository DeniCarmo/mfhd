export interface NewSocialsType {
  title: string;
  link: string;
  id?: string;
}

export interface SocialsState {
  isLoading: boolean;
  socials: NewSocialsType[];
}

export interface SocialState extends NewSocialsType {
  isLoading?: boolean;
}
