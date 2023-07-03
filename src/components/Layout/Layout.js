import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, PageContainer } from './Layout.styles';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>
    </Container>
  );
};

export default Layout;
