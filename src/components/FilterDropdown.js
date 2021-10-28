import * as style from './styles/FilterDropdownStyle';

export default function FilterDropdown({ placeholder, options }) {
  return (
    <>
      <style.FilterDropdown placeholder={placeholder} clearable fluid selection options={options} />
    </>
  );
}
