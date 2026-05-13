// function Name(props)
import Input from "./Input";

const StepThree = () => {
  return (
    <>
      <Input title="date of birth" type="date" />
      <Input title="Profile image" type="file" accept="image/*" />
    </>
  );
};

export default StepThree;
