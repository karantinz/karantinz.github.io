import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Mail_styles";

export const Mail = () => {
  return (
    <S.Mail id="contact">
      <Container>
        <FlexWrapper justifyContent="center">
          <S.MailTitle>
            For any questions please mail me: <S.MailSpan>mail@mail</S.MailSpan>
          </S.MailTitle>
        </FlexWrapper>
      </Container>
    </S.Mail>
  );
};
