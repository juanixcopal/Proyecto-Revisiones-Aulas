import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

const SearchInput = () => {
  return (
    <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-searchbar"
      />
      <Input
        type="search"
        className="cr-search-form__input"
        placeholder="Buscar..."
      />
    </Form>
  );
};

export default SearchInput;
