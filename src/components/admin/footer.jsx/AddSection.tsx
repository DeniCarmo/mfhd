import { useState } from 'react';
import { FormInput } from '../../FormInput';
import { FormItemWrapper } from '../FormItemWrapper';
import { FormWrapper } from '../FormWrapper';
import { SectionItemType, SectionType } from '../../../types/sections';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addSection } from '../../../features/sections/sectionSlice';

const initialState = {
  title: '',
  items: [
    {
      title: '',
      link: '',
    },
  ],
};

export const AddSection = () => {
  const [title, setTitle] = useState<string>(initialState.title);
  const [items, setItems] = useState<SectionItemType[]>(initialState.items);
  const { isLoading } = useAppSelector((store) => store.sections);
  const dispatch = useAppDispatch();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle(value);
  };

  const handleItems = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;

    const onChangeValue: SectionItemType[] = [...items];

    onChangeValue[i][name as keyof SectionItemType] = value;

    setItems(onChangeValue);
  };

  const addItem = () => {
    setItems([...items, { title: '', link: '' }]);
  };

  const deleteItem = (i: number) => {
    const newItemList = [...items];

    newItemList.splice(i, 1);

    setItems(newItemList);
  };

  const handleSubmit = () => {
    const data: SectionType = {
      title,
      items,
    };

    dispatch(addSection(data));

    setTitle(initialState.title);
    setItems(initialState.items);
  };

  return (
    <FormWrapper>
      <FormItemWrapper>
        <FormInput
          label="Type in the title for the new section."
          name="sectionTitle"
          type="text"
          value={title}
          handleInput={handleTitle}
        />
      </FormItemWrapper>

      <h2 className="text-4xl text-mf-white my-8 uppercase">Section Items</h2>

      {items.map((item, i) => (
        <FormItemWrapper key={i}>
          <label className="label">Type in the title for the new item.</label>
          <input
            name="title"
            type="text"
            className="form-input mb-3"
            value={item.title}
            onChange={(e) => handleItems(e, i)}
          />

          <label className="label">Type in the link for the new item.</label>
          <input
            name="link"
            type="text"
            className="form-input"
            value={item.link}
            onChange={(e) => handleItems(e, i)}
          />

          {items.length > 1 && i > 0 && (
            <button className="btn btn-danger mt-3 mx-auto" onClick={() => deleteItem(i)}>
              Delete Item
            </button>
          )}
        </FormItemWrapper>
      ))}

      <div className="flex items-center justify-center gap-3">
        <button className="btn btn-primary" onClick={addItem}>
          New Item
        </button>

        <button className="btn btn-success" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Saving' : 'Save Section'}
        </button>
      </div>
    </FormWrapper>
  );
};
