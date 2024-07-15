import { selectData } from "src/constants";
import { SelectSort, SelectWrap } from "./styled";

export interface SelectProps {
  onClick: (value: string) => void;
  selectLabel: string;
}

export const Select = ({ selectLabel, onClick }: SelectProps) => {
  return (
    <SelectWrap>
      <label htmlFor="">{selectLabel}</label>
      <SelectSort
        onChange={(e) => {
          onClick(e.target.value);
        }}
      >
        {selectData.map(({ value, optionValue }) => (
          <option key={value} value={optionValue}>
            {value}
          </option>
        ))}
      </SelectSort>
    </SelectWrap>
  );
};
