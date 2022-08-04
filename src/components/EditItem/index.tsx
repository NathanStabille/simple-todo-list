import { ChangeEvent, SyntheticEvent, useState } from "react";
import { ListType } from "../../types/ListType";
import * as C from "./style";

type Props = {
  list: ListType[];
  itemName: string;
  setList: (list: ListType[]) => void;
};

export const EditItem = ({ list, itemName, setList }: Props) => {
  const [inputText, setInputText] = useState("");
  const [hideModal, setHideModal] = useState(false);

  const editItem = (name: string) => {
    let newList = list.map((item) => {
      if (itemName === item.name) {
        return { name: name };
      }

      return item;
    });
    if (name !== "" && name !== " ") {
      setList(newList);
      setInputText("");
      setHideModal(false);
    } else {
      alert("enter new value");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClick = (e: SyntheticEvent) => {};

  return (
    <C.Container>
      <C.Icon onClick={() => setHideModal(true)}>📝</C.Icon>

      {hideModal && (
        <C.ModalArea onClick={handleClick}>
          <label>Enter new value : </label>

          <C.EditArea>
            <input type="text" value={inputText} onChange={handleChange} />
            {inputText === "" && (
              <C.CloseButton onClick={() => setHideModal(false)}>
                ❌
              </C.CloseButton>
            )}
            <button onClick={() => editItem(inputText)}>EDIT</button>
          </C.EditArea>
        </C.ModalArea>
      )}
    </C.Container>
  );
};
