import { ListType } from "../../types/ListType";
import { DeleteItem } from "../DeleteItem";
import { EditItem } from "../EditItem";
import * as C from "./style";

type Props = {
  list: ListType[];
  setList: (list: ListType[]) => void
};

export const ListItem = ({ list, setList }: Props) => {
  return (
    <C.Container>
      {list.map((item, index) => {
        let itemName = item.name;

        return (
          <ul key={index}>
            <li>{itemName}</li>
            <EditItem itemName={itemName} list={list} setList={setList}/>
            <DeleteItem itemName={itemName} list={list} setList={setList}/>
          </ul>
        );
      })}
    </C.Container>
  );
};
