import { SelectSort, SelectWrap } from "./styled";

export interface SelectProps {
  onClick: (value: string) => void;
  selectLabel: string;
  selectData: { optionValue: string; value: string }[];
}

export const Select = ({ selectLabel, selectData, onClick }: SelectProps) => {
  return (
    <SelectWrap>
      <label htmlFor="">{selectLabel}</label>
      <SelectSort
        onChange={(e) => {
          onClick(e.target.value);
        }}
      >
        {selectData.map((item) => (
          <option key={item.value} value={item.optionValue}>
            {item.value}
          </option>
        ))}
      </SelectSort>
    </SelectWrap>
  );
};
