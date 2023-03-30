import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  background-color: #f5f5f5;
`;
const Form = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin-top: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
const SearchDiv = styled.div`
  align-items: center;
  text-align: center;
`;

const TaskDiv = styled.div`
  display: "flex";
  justify-content: "space-between";
`;

export { Container, Form, SearchDiv, TaskDiv };
