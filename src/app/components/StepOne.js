// function Name(props)
import Input from "./Input";

const StepOne = (props) => {
  return (
    <>
      <Input
        title="firstname"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"First name cannot contain special characters or numbers."}
      />
      <Input
        title="lastname"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"Last name cannot contain special characters or numbers."}
      />
      <Input
        title="username"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"This username is already taken. Please choose another one."}
      />
    </>
  );
};

export default StepOne;
