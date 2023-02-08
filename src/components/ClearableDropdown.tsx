import { SyntheticEvent } from 'react';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';

interface IProps {
  options: DropdownItemProps[];
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function ClearableDropdown({ options, setSort }: IProps) {
  const handleChange = (
    _: SyntheticEvent<HTMLElement, Event>,
    { value }: DropdownProps,
  ) => {
    if (value === '') {
      setSort('0');
    } else {
      setSort(value as string);
    }
  };
  return (
    <Dropdown
      style={{
        fontFamily: 'SHSN-M',
        background: '#ffffff 0% 0% no-repeat padding-box',
        height: '40px',
        border: '1px solid #dedede',
        borderRadius: '2px',
        padding: '12px 16px',
        fontSize: '13px',
        lineHeight: '17px',
        marginRight: '12px',
      }}
      placeholder={'전체 카테고리'}
      clearable
      floating
      scrolling
      options={options}
      onChange={handleChange}
    />
  );
}
