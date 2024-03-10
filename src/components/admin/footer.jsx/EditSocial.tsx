import { deleteSocialDB, updateSocialDB } from '../../../features/socials/socialSlice';
import { updateSocial } from '../../../features/socials/socialsSlice';
import { useAppDispatch, useAppSelector } from '../../../store';
import { NewSocialsType } from '../../../types/socials';
import { FormItemWrapper } from '../FormItemWrapper';
import { FormWrapper } from '../FormWrapper';

export const EditSocial = () => {
  const { socials } = useAppSelector((store) => store.socials);
  const dispatch = useAppDispatch();

  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;

    const updatedSocial = socials.map((social, index) => {
      if (index === i) {
        return { ...social, [name]: value };
      }

      return social;
    });

    if (!updatedSocial) return;

    dispatch(updateSocial(updatedSocial));
  };

  const handleDeleteSocial = (id: string) => {
    dispatch(deleteSocialDB(id));
  };

  const handleUpdateSocialDB = (social: NewSocialsType) => {
    dispatch(updateSocialDB(social));
  };

  if (!socials) {
    return <h2 className="text-4xl text-mf-white my-8 uppercase">Loading</h2>;
  }

  return (
    <FormWrapper>
      <h2 className="text-4xl text-mf-white my-8 uppercase">Edit Socials</h2>

      {socials.map((social, i) => {
        return (
          <FormItemWrapper key={social.id}>
            <input
              name="title"
              type="text"
              className="form-input max-w-full mb-3"
              value={social.title}
              onChange={(e) => handleItemChange(e, i)}
            />

            <input
              name="link"
              type="text"
              className="form-input max-w-full"
              value={social.link}
              onChange={(e) => handleItemChange(e, i)}
            />

            <div className="flex gap-2 mt-2 items-center justify-center w-full">
              <button
                className="btn btn-success max-h-10"
                onClick={() => handleUpdateSocialDB(social)}
              >
                Save
              </button>

              <button
                className="btn btn-danger max-h-10"
                onClick={() => handleDeleteSocial(social.id!)}
              >
                Delete
              </button>
            </div>
          </FormItemWrapper>
        );
      })}
    </FormWrapper>
  );
};
