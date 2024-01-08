/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import Select from 'react-select';
import styled, { ThemeContext } from 'styled-components';
import { flavourOptions } from './data';

type Props = {
  label: string;
};

const NewSelect: React.FC<Props> = ({ label }) => { 
  const themeContext = useContext(ThemeContext);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption: any) => {
    console.log('Selected Option:', selectedOption);
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <SelectLabel>{label}</SelectLabel>
      {themeContext && (
        <Select
          placeholder="Select a flavor..."
          options={flavourOptions}
          value={selectedOption}
          onChange={handleSelectChange}
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
