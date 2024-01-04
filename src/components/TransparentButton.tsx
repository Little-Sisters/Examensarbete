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

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid;
  background-color: transparent;
  border-color: black;
  margin-left: -1px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.grey};
    color: ${({ theme }) => theme.paper};
  }
`;

export default TransparentButton;
