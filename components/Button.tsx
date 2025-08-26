'use client'

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #f36d00c7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #e06603c7;
  }
`;

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return <StyledButton>{children}</StyledButton>;
}
