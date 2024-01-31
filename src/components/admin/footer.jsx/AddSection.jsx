import { useState } from 'react';
import saveFooterSection from '../../../requests/footer/saveFooterSection';

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
  const [title, setTitle] = useState(initialState.title);
  const [items, setItems] = useState(initialState.items);

  const handleTitle = (e) => {
    const { value } = e.target;

    setTitle(value);
  };

  const handleItems = (e, i) => {
    const { name, value } = e.target;

    const onChangeValue = [...items];

    onChangeValue[i][name] = value;

    setItems(onChangeValue);
  };

  const addItem = () => {
    setItems([...items, { title: '', link: '' }]);
  };

  const deleteItem = (i) => {
    const newItemList = [...items];

    newItemList.splice(i, 1);

    setItems(newItemList);
  };

  const handleSubmit = () => {
    const data = {
      _id: crypto.randomUUID(),
      title,
      items,
    };

    saveFooterSection(data);

    setTitle(initialState.title);
    setItems(initialState.items);
  };

  return (
    <section className="footer-forms" id="panel-footer">
      <div className="footer-forms__wrapper">
        <label className="footer-forms__label">Type in the title for the new section.</label>
        <input
          name="sectionTitle"
          type="text"
          className="footer-forms__input"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>

      <h2 className="footer-forms-t2">Section Items</h2>

      {items.map((item, i) => (
        <div className="footer-forms__item" key={i}>
          <label className="footer-forms__label">Type in the title for the new item.</label>
          <input
            name="title"
            type="text"
            className="footer-forms__input"
            value={item.title}
            onChange={(e) => handleItems(e, i)}
          />

          <label className="footer-forms__label">Type in the link for the new item.</label>
          <input
            name="link"
            type="text"
            className="footer-forms__input"
            value={item.link}
            onChange={(e) => handleItems(e, i)}
          />

          {items.length > 1 && i > 0 && (
            <button className="footer-forms__delete btn btn-danger" onClick={() => deleteItem(i)}>
              Delete Item
            </button>
          )}
        </div>
      ))}

      <button className="footer-forms__add btn btn-primary mb-3" onClick={addItem}>
        Add New Item
      </button>

      <button className="footer-forms__save btn btn-success" onClick={handleSubmit}>
        Save New Section
      </button>
    </section>
  );
};
