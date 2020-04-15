import { Button } from "react-native";

const MyButton = ({ childer }) => {
  return <Button style={{ color: "red" }}>{childer}</Button>;
};

{
  /* <MyButton title="Click me!">
  {// childern }
</MyButton>; */
}

export default MyButton;
