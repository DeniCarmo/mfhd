import { FooterListItem } from './FooterListItem';

type FooterItemListProps = {
  sections?: [];
};

type SectionProps = {
  _id: string;
  title: string;
  items: [];
};

type ItemProps = {
  title: string;
  link: string;
};

export const FooterItemList = ({ sections }: FooterItemListProps) => {
  if (!sections) {
    return <h1>Loading...</h1>;
  }

  sections.map((section: SectionProps) => {
    const { title, items } = section;
    return (
      <ul className="footer-item__list" key={section._id}>
        <FooterListItem title={title} isTitle />

        {items.map((item: ItemProps, i) => {
          return <FooterListItem text={item.title} link={item.link} key={i} />;
        })}
      </ul>
    );
  });
};
