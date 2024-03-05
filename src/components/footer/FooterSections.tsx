import { useEffect } from 'react';
import { FooterListItem } from './FooterListItem';
import { useAppDispatch, useAppSelector } from '../../store';
import { getAllSections } from '../../features/sections/sectionsSlice';

export const FooterSections = () => {
  const { sections, isLoading } = useAppSelector((store) => store.sections);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSections());
  }, []);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="footer-top--wrapper flex gap-6 lg:ml-28">
      {sections.map(({ id, title, items }) => {
        return (
          <ul className="footer-item__list" key={id}>
            <FooterListItem title={title} isTitle />

            {items?.map(({ title, link }, i) => {
              return <FooterListItem text={title} link={link} key={i} />;
            })}
          </ul>
        );
      })}
    </div>
  );
};
