import { useState } from "react";
import * as C from "./App.Style";
import { InputItem } from "./components/InputItem";
import { ListItem } from "./components/ListItem";
import { ListType } from "./types/ListType";

export const App = () => {
  const [list, setList] = useState<ListType[]>([]);

  return (
    <C.Container>
      <C.Area>
        <InputItem list={list} setList={setList} />
        <ListItem list={list} setList={setList} />
      </C.Area>
    </C.Container>
  );
};
