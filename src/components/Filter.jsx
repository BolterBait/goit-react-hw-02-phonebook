import { Field, FieldName } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FieldName>
      Find contacts by name
      <Field type="text" name="filter" onChange={onFilter} value={filter} />
    </FieldName>
  );
};
