import styled from "styled-components";
import style from "../style";

const Input = styled.input`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: ${state=>!!state.error?style.input.error.text:style.input.normal.text};
  padding: 14px 10px;
  border: 1px solid ${state=>!!state.error?style.input.error.border:style.input.normal.border};
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: ${state=>!!state.error?'10px':'30px'};
  outline: none;
  
  ::placeholder{
    color: ${state=>!!state.error?style.input.error.placeholder:style.input.normal.placeholder};
  }
`

const Container = styled.div`
  ::after{
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    content: "${state=>state.error}";
    margin-bottom: 30px;
    color: ${style.input.error.border}
  }
`


export {Container, Input}
