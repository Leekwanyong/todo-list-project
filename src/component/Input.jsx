import React, { useState } from "react";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";

const Input = ({ onText }) => {
  // 사용자가 입력한 값 상태 업데이트
  const [text, setText] = useState("");

  // 새로고침 방지 및 props를 이용해 넘겨주기
  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return alert("할일 목록을 입력해주세요");
    }
    onText({ id: Date.now(), text, checked: false });
    setText("");
  };

  // 현재 이벤트의 값 업데이트
  const onChangeValue = (e) => {
    setText(e.target.value);
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        className="form-input"
        type="text"
        value={text}
        onChange={onChangeValue}
      />

      <button>
        <AiOutlinePlusCircle />
      </button>
    </form>
  );
};

export default Input;
