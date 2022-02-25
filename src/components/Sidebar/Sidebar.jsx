import React from 'react';
import { Container, Fieldset, Legend, Input } from './Sidebar.styled';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../provider/Provider';

const Sidebar = ({ categories }) => {
  const navigate = useNavigate();
  const { setFilters, filters } = useProducts();

  let selected = [];
  const onChange = () => {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    selected = Array.from(checked).map((x) => x.name);
    setFilters(selected.join(','));
    navigate({
      pathname: '/products',
      search: `?category=${selected.join(',')}`,
    });
  };

  return (
    <Container>
      <Fieldset>
        <Legend>Categories</Legend>
        {categories &&
          categories.map((category) => (
            <div key={category.id}>
              <Input
                type="checkbox"
                name={category.data.name}
                id={category.data.name}
                value={category.id}
                checked={filters && filters.includes(category.data.name)}
                onChange={onChange}
              />
              <label>{category.data.name}</label>
            </div>
          ))}
      </Fieldset>
    </Container>
  );
};

export default Sidebar;
