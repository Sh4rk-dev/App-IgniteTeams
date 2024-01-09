import { Container, Subtitle, Title } from "./styles";

type Props = {
  title?: string;
  subTitle?: string;
};

export function Highlight({ title, subTitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </Container>
  );
}
