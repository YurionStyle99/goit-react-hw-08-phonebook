import Header from 'components/Header/Header';
import { Outlet } from 'react-router';

const DefaultLayout = ({ isModalOpen = false, modalType = '' }) => {
  return (
    <>
      <Header isModalOpen={isModalOpen} modalType={modalType} />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
