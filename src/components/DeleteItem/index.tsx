import { ListType } from "../../types/ListType";
import * as C from "./style";

type Props = {
  list: ListType[];
  itemName: string;
  setList: (list: ListType[]) => void;
};

export const DeleteItem = ({ itemName, list, setList }: Props) => {
  const deleteItem = () => {
    let filteredList = list.filter((value) => {
      return value.name !== itemName;
    });

    setList(filteredList);
  };

  return <C.Container onClick={() => deleteItem()}>🗑️</C.Container>;
};
