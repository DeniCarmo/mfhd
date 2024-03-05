export interface SectionType {
  id?: string;
  title: string;
  items?: SectionItemType[];
}

export interface SectionItemType {
  title: string;
  link: string;
}

export interface SectionsState {
  isLoading: boolean;
  sections: SectionType[];
}

export interface SectionState extends SectionType {
  isLoading?: boolean;
}
