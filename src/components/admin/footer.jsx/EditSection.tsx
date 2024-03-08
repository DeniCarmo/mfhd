import React, { useState } from 'react';
import { FormItemWrapper } from '../FormItemWrapper';
import { FormWrapper } from '../FormWrapper';
import { useAppDispatch, useAppSelector } from '../../../store';
import { SectionItemType, SectionType } from '../../../types/sections';
import { updateItem } from '../../../features/sections/sectionsSlice';

const sectionInitialState: SectionType = {
  id: '',
  title: '',
  items: [],
};

const itemInitialState: SectionItemType = {
  title: '',
  link: '',
};

export const EditSection = () => {
  const { sections, isLoading } = useAppSelector((store) => store.sections);
  const [selectedSection, setSelectedSection] = useState<SectionType>(sectionInitialState);
  const [sectionItems, setSectionItems] = useState<SectionItemType[] | undefined>([]);
  const [itemEdit, setItemEdit] = useState<SectionItemType>(itemInitialState);
  const dispatch = useAppDispatch();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setSelectedSection(sections.filter((section) => section.title === value)[0]);
  };

  const handleLoadSection = () => {
    setSectionItems(selectedSection.items);
  };

  const handleItems = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;

    const onChangeValue: SectionItemType[] = [...sectionItems!];

    console.log(onChangeValue[i]);

    onChangeValue[i][name as keyof SectionItemType] = value;

    setItemEdit(onChangeValue[i]);
  };

  const handleSaveSection = () => {
    console.log(selectedSection);

    selectedSection.items = sectionItems;

    console.log(selectedSection);
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

          <button className="btn btn-primary max-h-11" onClick={handleLoadSection}>
            Select
          </button>
        </div>

        <div className="w-full mt-4">
          <ul className="flex flex-col gap-y-1">
            {sectionItems?.map((item, i) => {
              return (
                <li className="flex items-center mb-4 justify-start w-full gap-2" key={i}>
                  <div className="flex flex-col items-center w-full max-w-[350px]">
                    <input
                      className="text-md flex items-center justify-start pl-2 mb-2 text-start outline-none bg-mf-grey-dark text-white w-full h-auto min-h-11 border border-white rounded-md"
                      name="title"
                      value={item.title}
                      onChange={(e) => handleItems(e, i)}
                    />

                    <input
                      className="text-md flex items-center justify-start pl-2 text-start outline-none bg-mf-grey-dark text-white w-full h-auto min-h-11 border border-white rounded-md"
                      name="link"
                      value={item.link}
                      onChange={(e) => handleItems(e, i)}
                    />
                  </div>

                  <div className="flex gap-2">
                    <button className="btn btn-danger max-h-11">Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <button className="btn btn-primary">Add New Item</button>
      </FormItemWrapper>

      <button className="btn btn-success mt-3" onClick={handleSaveSection}>
        Save
      </button>
    </FormWrapper>
  );
};
