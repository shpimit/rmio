import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #eee;
  align-items: flex-start;
  gap: 16px;
`;
export const Button = styled.button`
  padding: 16px;
  width: 100%;
  background-color: #00a5ba;
  color: #fff;
`;
export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > input {
    padding: 8px 16px;
    border: 1px solid #eee;
  }
`;