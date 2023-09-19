interface FieldValueProps {
  label: string;
  value: string;
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
