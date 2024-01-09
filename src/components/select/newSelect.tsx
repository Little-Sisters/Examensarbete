import { useContext } from 'react';
import Select from 'react-select';
import styled, { ThemeContext } from 'styled-components';
import { Option } from './data';

interface NewSelectProps {
  label: string;
  placeholder: string;
  options: Option[];
  selectedOption: Option | null;
  setSelectedOption: (selectedOption: Option | null) => void;
}

const Dot = styled.span``;
const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s linear;
  &:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.2
    ); // Adjust the hover background color as needed
  }

  &.react-select__option--is-selected {
    background-color: #186179; // Adjust the selected background color as needed
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomOption = ({ innerProps, label, data }: any) => (
  <OptionContainer {...innerProps}>
    {label}
    {data && <Dot>{data.price && `+ $${data.price}`}</Dot>}
  </OptionContainer>
);

const NewSelect: React.FC<NewSelectProps> = ({
  label,
  selectedOption,
  options,
  placeholder,
  setSelectedOption,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <SelectLabel>{label}</SelectLabel>
      {themeContext && (
        <Select
          placeholder={placeholder}
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary: themeContext.button,
              primary25: 'rgba(0, 0, 0, 0.15)',
              primary50: 'hotpink',
              primary75: 'hotpink',
              neutral0: themeContext.body,
              neutral5: themeContext.text,
              neutral10: themeContext.input,
              neutral20: themeContext.input,
              neutral30: themeContext.input,
              neutral40: themeContext.input,
              neutral50: themeContext.input,
              neutral60: themeContext.input,
              neutral70: themeContext.input,
              neutral80: themeContext.text,
              neutral90: themeContext.text,
            },
          })}
          components={{
            Option: CustomOption,
          }}
          styles={{
            control: (styles) => ({
              ...styles,
              transition: 'all 0.30s linear',
              borderRadius: 3,
            }),
            option: (styles) => ({
              ...styles,
              transition: 'all 0.30s linear',
              borderRadius: 3,
            }),
            input: (styles) => ({
              ...styles,
              borderRadius: 3,
              transition: 'all 0.30s linear',
            }),
            placeholder: (styles) => ({ ...styles }),
            menu: (styles) => ({ ...styles, borderRadius: 3 }),
            singleValue: (styles) => ({
              ...styles,
            }),
          }}
        />
      )}
    </div>
  );
};

export const SelectLabel = styled.span`
  margin-bottom: 3px;
`;

export default NewSelect;
