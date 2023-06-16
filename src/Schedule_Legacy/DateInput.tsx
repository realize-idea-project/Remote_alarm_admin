import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";
import _ from "lodash";

interface Props {
  title: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const DateInput: FC<Props> = ({
  title,
  value,
  onChange,
  disabled = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <InputContainer>
      {!_.isEmpty(title) && <InputLabel>{title}</InputLabel>}
      <input
        type="datetime-local"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputLabel = styled.div`
  font-size: 1rem;
  margin-right: 1rem;
  width: 3rem;
`;
