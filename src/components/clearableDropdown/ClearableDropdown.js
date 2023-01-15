import * as style from './ClearableDropdownStyle';

export default function ClearableDropdown({ options, setSort }) {
  const handleChange = (e, { value }) => {
    if (value === '') {
      setSort(0);
    } else {
      setSort(value);
    }
  };
  return (
    <style.FilterDropdown
      placeholder={'전체 카테고리'}
      clearable
      floating
      scrolling
      options={options}
      onChange={handleChange}
    />
  );
}
