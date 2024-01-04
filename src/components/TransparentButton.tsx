import styled from 'styled-components';

interface TransparentButtonProps {
  title: string;
  onPress: () => void;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  title,
  onPress,
}: TransparentButtonProps) => {
  return <Button onClick={onPress}>{title}</Button>;
};

const Button = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.footerDetail};
  color: ${({ theme }) => theme.footerText};
  border-radius: 3px;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.footerDetail};
    color: ${({ theme }) => theme.footerText};
  }
`;

export default TransparentButton;
