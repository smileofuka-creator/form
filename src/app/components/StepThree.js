// function Name(props)
import Input from "./Input";

const StepThree = (props) => {
  return (
    <>
      <Input
        title="date of birth"
        type="date"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"Please select a date."}
      />
      <Input
        title="Profile image"
        type="file"
        accept="image/*"
        handleInputValue={props.handleInputValue}
        error={true}
        message={"Image cannot be blank"}
      />
    </>
  );
};

export default StepThree;
