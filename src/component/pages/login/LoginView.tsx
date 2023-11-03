import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #eee;
  align-items: flex-start;
  place-items: center; //
  justify-content: center;
  min-width: 320px; //
  min-height: 70vh; //
  gap: 16px;
`;
export const Button = styled.button`
  padding: 16px;
  /* width: 100%; */
  width: 200px;
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

const LoginView = ({ id, pw, onChange, handleSubmit }: any) => {
  // const [id, setId] = useState();
  // const [password, setPassword] = useState();

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        ID
        <input
          name="id"
          type="text"
          autoFocus
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={onChange}
        />
      </InputWrapper>
      <InputWrapper>
        Password
        <input
          name="pw"
          type="password"
          placeholder="패스워드를 입력해주세요"
          value={pw}
          onChange={onChange}
        />
      </InputWrapper>
      <Button type="submit">로그인</Button>
    </FormWrapper>
  );
};

export default LoginView;
