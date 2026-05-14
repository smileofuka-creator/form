// function Name(props)
import Input from "./Input";

const StepTwo = (props) => {
  return (
    <>
      <Input
        title="Email"
        type="email"
        handleInputValue={props.handleInputValue}
      />
      <Input
        title="Phone number"
        type="tel"
        handleInputValue={props.handleInputValue}
      />
      <Input
        title="Password"
        type="password"
        handleInputValue={props.handleInputValue}
      />
      <Input
        title="Confirm password"
        type="password"
        handleInputValue={props.handleInputValue}
      />
    </>
  );
};

export default StepTwo;
