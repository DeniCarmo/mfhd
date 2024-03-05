import { useEffect } from 'react';
import { FooterSocialItem } from './FooterSocialItem';
import { getAllSocials } from '../../features/socials/socialsSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { NewSocialsType } from '../../types/socials';

export const FooterSocials = () => {
  const { socials, isLoading } = useAppSelector((store) => store.socials);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSocials());
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <ul className="footer-socials flex gap-2 lg:absolute lg:top-3 lg:right-3">
      {socials.map(({ title, link, id }: NewSocialsType) => (
        <FooterSocialItem title={title} link={link} key={id} />
      ))}
    </ul>
  );
};
