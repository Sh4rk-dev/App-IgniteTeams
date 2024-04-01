import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container{...rest} >
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
