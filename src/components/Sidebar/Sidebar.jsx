import React from 'react';
import { Container, Fieldset, Legend, Input } from './Sidebar.styled';

const Sidebar = ({ categories, setActiveFilters }) => {
  let selected = [];
  const onChange = () => {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    selected = Array.from(checked).map((x) => x.value);
    setActiveFilters(selected);
  };

  return (
    <Container>
      <Fieldset onChange={onChange}>
        <Legend>Categories</Legend>
        {categories &&
          categories.map((category) => (
            <div key={category.id}>
              <Input
                type="checkbox"
                name={category}
                id={category.data.name}
                value={category.id}
              />
              <label>{category.data.name}</label>
            </div>
          ))}
      </Fieldset>
    </Container>
  );
};

export default Sidebar;
