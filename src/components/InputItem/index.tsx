import { KeyboardEvent, useState } from "react";
import { ListType } from "../../types/ListType";
import * as C from "./style";

type Props = {
  list: ListType[];
  setList: (list: ListType[]) => void;
};

export const InputItem = ({ list, setList }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText !== "") {
      let newList = [...list, { name: inputText }];
      setList(newList);
      setInputText("");
    }
  };

  const handleChange = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <C.Container>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        onKeyUpCapture={handleChange}
      />
      <button onClick={handleClick}>Add Item</button>
    </C.Container>
  );
};
