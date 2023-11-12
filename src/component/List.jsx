import React, { useState } from "react";
import Input from "./Input";

const List = () => {
  // 할 일 목록을 저장하는 객체로 형태로 상태를 업데이트
  const [list, setList] = useState([
    { id: Date.now(), text: "123", checked: false },
  ]);

  // 기존의 배열과 Input컴포넌트에서 받아온 것과 비교하여 업데이트 불변성 불변성!!!!!!!!!
  const listItem = (todo) => {
    setList((item) => [...item, todo]);
  };

  //  filter를 이용해 삭제버튼 구현 내가 원하는 것은 현재 배열에서 원소를 제거하는 것이니깐 스프레드 ...연산자 필요없음 그러면 새로운 배열을 만듬
  const removeItem = (id) => {
    setList((item) => item.filter((item) => item.id !== id));
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            {item.text}
            <button onClick={() => removeItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <Input onText={listItem} />
    </div>
  );
};

export default List;
