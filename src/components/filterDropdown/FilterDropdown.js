import * as style from './FilterDropdownStyle';

export default function FilterDropdown({ options, setSort }) {
  const handleChange = (e, { value }) => {
    setSort(value);
  };
  return (
    <style.FilterDropdown
      defaultValue={options[0].value}
      fluid
      selection
      options={options}
      onChange={handleChange}
    />
  );
}
