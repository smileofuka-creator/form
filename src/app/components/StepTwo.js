// function Name(props)
import Input from "./Input";

const StepTwo = () => {
  return (
    <>
      <Input title="Email" type="email" />
      <Input title="Phone number" type="tel" />
      <Input title="Password" type="password" />
      <Input title="Confirm password" type="password" />
    </>
  );
};

export default StepTwo;
