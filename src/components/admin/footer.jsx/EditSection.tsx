import React, { useState } from 'react';
import { FormItemWrapper } from '../FormItemWrapper';
import { FormWrapper } from '../FormWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { SectionType } from '../../../types/sections';
import { addNewItem, updateItem } from '../../../features/sections/sectionsSlice';
import { updateSectionDB } from '../../../features/sections/sectionSlice';

const sectionInitialState: SectionType = {
  id: '',
  title: '',
  items: [],
};

export const EditSection = () => {
  const { sections, isLoading } = useAppSelector((store) => store.sections);
  const [selectedSection, setSelectedSection] = useState<SectionType>(sectionInitialState);
  const dispatch = useAppDispatch();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setSelectedSection(sections.filter((section) => section.title === value)[0]);
  };

  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;

    const update = selectedSection.items?.map((item, index) => {
      if (index === i) {
        return { ...item, [name]: value };
      }

      return item;
    });

    if (!update) return;

    dispatch(updateItem({ id: selectedSection.id, items: update }));
    setSelectedSection((prev) => ({ ...prev, items: update }));
  };

  const addNewSectionItem = () => {
    let newItems = selectedSection.items;

    newItems = [...newItems!, { title: '', link: '' }];

    dispatch(addNewItem({ id: selectedSection.id, newItems }));
    setSelectedSection((prev) => ({ ...prev, items: newItems }));
  };

  const handleSaveSection = () => {
    console.log(selectedSection);
    dispatch(updateSectionDB(selectedSection));
  };

  const handleDeleteItem = (title: string) => {
    const update = selectedSection.items?.filter((item) => item.title !== title);

    dispatch(updateItem({ id: selectedSection.id, items: update }));
    setSelectedSection((prev) => ({ ...prev, items: update }));
  };

  if (isLoading) {
    return <h3>Loading</h3>;
  }

  return (
    <FormWrapper>
      <FormItemWrapper>
        <label className="label">Select the desired section to edit.</label>

        <div className="flex w-full items-center justify-start gap-2">
          <select
            name="title"
            className="form-input min-h-11 rounded-md w-full"
            value={selectedSection.title}
            onChange={(e) => handleSelect(e)}
          >
            <option defaultValue="">Select</option>
            {sections?.map((section) => {
              return (
                <option value={section.title} key={section.id}>
                  {section.title}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-full mt-4">
          <ul className="flex flex-col gap-y-1">
            {selectedSection.items?.map((item, i) => {
              return (
                <li className="flex items-center mb-4 justify-start w-full gap-2" key={i}>
                  <div className="flex flex-col items-center w-full max-w-[350px]">
                    <input
                      className="text-md flex items-center justify-start pl-2 mb-2 text-start outline-none bg-mf-grey-dark text-white w-full h-auto min-h-11 border border-white rounded-md"
                      name="title"
                      value={item.title}
                      onChange={(e) => handleItemChange(e, i)}
                    />

                    <input
                      className="text-md flex items-center justify-start pl-2 text-start outline-none bg-mf-grey-dark text-white w-full h-auto min-h-11 border border-white rounded-md"
                      name="link"
                      value={item.link}
                      onChange={(e) => handleItemChange(e, i)}
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="btn btn-danger max-h-11"
                      onClick={() => handleDeleteItem(item.title)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {selectedSection.items!.length > 0 ? (
          <button className="btn btn-primary" onClick={addNewSectionItem}>
            Add New Item
          </button>
        ) : null}
      </FormItemWrapper>

      <button className="btn btn-success mt-3" onClick={handleSaveSection}>
        Save
      </button>
    </FormWrapper>
  );
};
