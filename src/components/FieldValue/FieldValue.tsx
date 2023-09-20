interface FieldValueProps {
  label: string;
  value: string | number | undefined | JSX.Element;
}

const FieldValue = ({ label, value }: FieldValueProps): JSX.Element => {
  return (
    <div>
      <span>{label}</span>
      <span>{value ?? "---"}</span>
    </div>
  );
};

export default FieldValue;
