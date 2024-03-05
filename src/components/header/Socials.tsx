import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { SocialIcons } from './SocialIcons';
import { getAllSocials } from '../../features/socials/socialsSlice';

export const Socials = () => {
  const dispatch = useAppDispatch();
  const { socials, isLoading } = useAppSelector((store) => store.socials);

  useEffect(() => {
    dispatch(getAllSocials());
  }, []);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  return (
    <ul className="flex items-center justify-center gap-1 md:ml-auto">
      {socials.map((social) => {
        return (
          <li key={social.id}>
            <a href={social.link} target="_blank" rel="noreferrer">
              <SocialIcons name={social.title.toLowerCase()} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
