import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { DarkModeContext } from "../darkmode/DarkModeContext";

const List = () => {
  // 할 일 목록을 저장하는 객체로 형태로 상태를 업데이트
  // 로컬스토리지에 저장
  const [list, setList] = useState(() => {
    const storedData = localStorage.getItem("myList");
    return storedData
      ? JSON.parse(storedData)
      : [{ id: Date.now(), text: "123", checked: false }];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(list));
  }, [list]);

  // 기존의 배열과 Input컴포넌트에서 받아온 것과 비교하여 업데이트 불변성 불변성!!!!!!!!!
  const listItem = (todo) => {
    setList((item) => [...item, todo]);
  };

  //  filter를 이용해 삭제버튼 구현 내가 원하는 것은 현재 배열에서 원소를 제거하는 것이니깐 스프레드 ...연산자 필요없음 그러면 새로운 배열을 만듬
  const removeItem = (id) => {
    setList((item) => item.filter((item) => item.id !== id));
  };

  // check상태 업데이트
  const onTodo = (itemValue) => {
    setList((item) =>
      item.map((v) => (v.id === itemValue ? { ...v, checked: !v.checked } : v)),
    );
  };

  // check필터
  const filterItem = list.filter((item) => {
    if (filter === "completed") {
      return item.checked;
    } else if (filter === "active") {
      return !item.checked;
    } else {
      return true;
    }
  });
  const { darkMode, darkModeBtn } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <button onClick={() => darkModeBtn()}>ads</button>
      <span>{darkMode.toString()}</span>
      <button onClick={() => setFilter("all")}>모든 할일</button>
      <button onClick={() => setFilter("active")}>해야할 일</button>
      <button onClick={() => setFilter("completed")}>완료된 일</button>
      <ul>
        {filterItem.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onTodo(item.id)}
            />
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
