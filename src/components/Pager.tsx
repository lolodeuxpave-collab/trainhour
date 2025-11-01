import React from "react";
import styled from "styled-components";
import { accentColor } from "../styles";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? accentColor : "#ccc")};
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  display: block;

  transform: scale(${({ $active }) => ($active ? 1.5 : 1)});
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(${({ $active }) => ($active ? 1.6 : 1.3)});
    background-color: ${({ $active }) => ($active ? accentColor : "#999")};
  }
`;


interface PagerProps {
  currentPage: number;
  total: number;
  onChange: (page: number) => void;
}

const Pager: React.FC<PagerProps> = ({ currentPage, total, onChange }) => {
  return (
    <Container>
      {Array.from({ length: total }, (_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;

        return (
          <Dot
            key={page}
            $active={isActive}
            onClick={() => onChange(page)}
            aria-label={`Page ${page}`}
          />
        );
      })}
    </Container>
  );
};

export default Pager;

