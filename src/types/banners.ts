export interface BannerType {
  id: string;
  title: string;
  image: {
    desktop: string;
    mobile: string;
  };
  alt: string;
  link: string;
}

export interface SubBannersType {
  id: string;
  title: string;
  image: string;
  link: string;
}
