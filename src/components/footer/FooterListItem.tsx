type FooterListItemProps = {
  isTitle?: boolean;
  title?: string;
  text?: string;
  link?: string;
};

export const FooterListItem = ({ isTitle, title, text, link }: FooterListItemProps) => {
  return (
    <li
      className={`footer-item__list-item text-white${isTitle ? ' font-bold text-lg' : ' text-sm'}`}
    >
      {isTitle ? (
        <span>{title}</span>
      ) : (
        <a href={link} className="footer-item__link">
          {text}
        </a>
      )}
    </li>
  );
};
