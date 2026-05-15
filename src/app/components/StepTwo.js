// function Name(props)
import Input from "./Input";

const StepTwo = (props) => {
  return (
    <>
      <Input
        title="email"
        type="email"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"Please provide a valid email address."}
      />
      <Input
        title="phoneNumber"
        type="tel"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"Please enter a valid phone number."}
      />
      <Input
        title="password"
        type="password"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"Password must include letters and numbers."}
      />
      <Input
        title="confirmPassword"
        type="password"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"Passwords do not match. Please try again."}
      />
    </>
  );
};

export default StepTwo;
