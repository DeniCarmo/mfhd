import { useState } from 'react';
import { FormWrapper } from '../FormWrapper';
import { FormItemWrapper } from '../FormItemWrapper';
import { NewSocialsType } from '../../../types/socials';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addSocial } from '../../../features/socials/socialSlice';

const initialState: NewSocialsType = {
  title: '',
  link: '',
};

export const AddSocial = () => {
  const [social, setSocial] = useState<NewSocialsType>(initialState);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((store) => store.socials);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setSocial((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(addSocial(social));
    setSocial(initialState);
  };

  return (
    <FormWrapper>
      <h2 className="footer-forms-t2">Social Links</h2>

      <FormItemWrapper>
        <label className="label">Type in the title for the new item.</label>
        <select
          name="title"
          className="form-input"
          value={social.title}
          onChange={(e) => handleInput(e)}
        >
          <option defaultValue="">Select</option>
          <option value="facebook">Facebook</option>
          <option value="x">Twitter</option>
          <option value="telegram">Telegram</option>
          <option value="whatsapp">Whatsapp</option>
          <option value="share">Share Link</option>
        </select>

        <label className="label mt-3">Type in the link for the new item.</label>
        <input
          name="link"
          type="text"
          className="form-input"
          value={social.link}
          onChange={(e) => handleInput(e)}
        />
      </FormItemWrapper>

      <button className="btn btn-success" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Saving' : 'Save'}
      </button>
    </FormWrapper>
  );
};
