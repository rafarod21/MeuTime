import { ErrorContainer } from './styles';

interface ErrorProps {
  message?: string;
}

export function Error({
  message = 'Algo de errado não está certo',
}: ErrorProps) {
  return (
    <ErrorContainer>
      <h2>{message}</h2>
    </ErrorContainer>
  );
}
