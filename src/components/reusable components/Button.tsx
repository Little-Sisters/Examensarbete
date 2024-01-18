import styled from 'styled-components';

interface ButtonProps {
  fullWidth?: boolean;
  type?: string;
}

interface TransparentButtonProps extends ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 3px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  background-color: transparent;
  border-color: ${({ theme }) => theme.grey};
  &:hover {
    background-color: ${({ theme }) => theme.grey};
    color: ${({ theme }) => theme.paper};
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Color = styled(Button)<ButtonProps>`
  background-color: ${({ theme }) => theme.button};
  border: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    color: ${({ theme }) => theme.text};
  }
`;

const TransparentButton: React.FC<TransparentButtonProps> = ({
  title,
  onPress,
  fullWidth,
}: TransparentButtonProps) => {
  return (
    <Button onClick={onPress} fullWidth={fullWidth}>
      {title}
    </Button>
  );
};

const FilledButton: React.FC<TransparentButtonProps> = ({
  title,
  onPress,
  fullWidth,
}: TransparentButtonProps) => {
  return (
    <Color onClick={onPress} fullWidth={fullWidth}>
      {title}
    </Color>
  );
};

export { FilledButton, TransparentButton };
