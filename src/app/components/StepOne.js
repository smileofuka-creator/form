// function Name(props)
import Input from "./Input";

const StepOne = (props) => {
  return (
    <>
      <Input title="First name" handleInputValue={props.handleInputValue} />
      <Input title="Last name" handleInputValue={props.handleInputValue} />
      <Input title="Username" handleInputValue={props.handleInputValue} />
    </>
  );
};

export default StepOne;
