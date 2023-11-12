import React, { useState } from "react";
import Input from "./Input";

const List = () => {
  // 할 일 목록을 저장하는 객체로 형태로 상태를 업데이트
  const [list, setList] = useState([
    { id: Date.now(), text: "123", checked: false },
  ]);

  const listItem = (todo) => {
    setList((item) => [...item, todo]);
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <Input onText={listItem} />
    </div>
  );
};

export default List;
