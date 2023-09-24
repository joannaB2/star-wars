import { StyledValueHolder } from "components/_styled-components";

interface FieldValueProps {
  label: string;
  value: string | number | undefined | JSX.Element;
}

const FieldValue = ({ label, value }: FieldValueProps): JSX.Element => {
  return (
    <StyledValueHolder>
      <span className='label'>{label}:</span>
      <span>{value ?? "No data"}</span>
    </StyledValueHolder>
  );
};

export default FieldValue;
