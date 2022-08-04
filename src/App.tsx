import { useEffect, useState } from "react";
import * as C from "./App.Style";
import { InputItem } from "./components/InputItem";
import { ListItem } from "./components/ListItem";
import { ListType } from "./types/ListType";

const SAVED_ITEMS = "savedItems";

export const App = () => {
  const getList = () => {
    const savedItems = localStorage.getItem(SAVED_ITEMS);
    if (!savedItems) {
      return [];
    }
    return JSON.parse(savedItems);
  };

  const [list, setList] = useState<ListType[]>(getList());

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(list));
  }, [list]);

  return (
    <C.Container>
      <C.Area>
        <C.Title>Task List</C.Title>
        <InputItem list={list} setList={setList} />
        <ListItem list={list} setList={setList} />
      </C.Area>
    </C.Container>
  );
};
