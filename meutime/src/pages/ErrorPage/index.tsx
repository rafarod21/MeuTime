import { Error } from '../../components/Error';

import { ErrorPageContainer } from './styles';

export function ErrorPage() {
  return (
    <ErrorPageContainer>
      <Error message='404: Page not found' />
    </ErrorPageContainer>
  );
}
