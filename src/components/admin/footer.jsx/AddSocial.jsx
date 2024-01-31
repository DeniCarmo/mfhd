import { useState } from 'react';
import saveFooterSocials from '../../../requests/footer/saveFooterSocials';

const initialState = {
  title: '',
  link: '',
};

export const AddSocial = () => {
  const [social, setSocial] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setSocial((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = () => {
    social._id = crypto.randomUUID();

    saveFooterSocials(social);

    setSocial(initialState);
  };

  return (
    <section className="footer-forms" id="panel-footer">
      <h2 className="footer-forms-t2">Social Links</h2>

      <div className="footer-forms__item">
        <label className="footer-forms__label">Type in the title for the new item.</label>
        <select
          name="title"
          className="footer-forms__input"
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

        <label className="footer-forms__label">Type in the link for the new item.</label>
        <input
          name="link"
          type="text"
          className="footer-forms__input"
          value={social.link}
          onChange={(e) => handleInput(e)}
        />
      </div>

      <button className="footer-forms__save btn btn-success" onClick={handleSubmit}>
        Save New Social
      </button>
    </section>
  );
};
