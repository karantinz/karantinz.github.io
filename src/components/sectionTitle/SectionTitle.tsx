import React from "react";
import Typewriter from "typewriter-effect";
import { S } from "./SectionTitle_styles";

type SectionTitleType = {
  title: string;
  subtitle: string;
};

export const SectionTitle = (props: SectionTitleType) => {
  return (
    <S.SectionTitle>
      <S.Title>
        <Typewriter
          options={{
            strings: [props.title],
            autoStart: true,
            loop: false,
            deleteSpeed: Infinity,
          }}
        />
      </S.Title>
      <S.Subtitle>{props.subtitle}</S.Subtitle>
    </S.SectionTitle>
  );
};
