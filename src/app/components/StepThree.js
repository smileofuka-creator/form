// function Name(props)
import Input from "./Input";

const StepThree = (props) => {
  return (
    <>
      <Input
        title="date of birth"
        type="date"
        handleInputValue={props.handleInputValue}
      />
      <Input
        title="Profile image"
        type="file"
        accept="image/*"
        handleInputValue={props.handleInputValue}
      />
    </>
  );
};

export default StepThree;
