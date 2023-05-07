import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNav, setNavState } from '@/services/state/shared/shared.slice';
import Drawer from '@/components/layout/navigation/drawer';
import SideNav from '@/components/layout/navigation/side-nav';

function Layout(props: { children: ReactNode }) {
    const isOpen = useSelector(selectCurrentNav);
    const dispatch = useDispatch();
    return(
          <div className='flex'>
              <Drawer />
              <SideNav />
              <div>
                  <button className='lg:hidden text-white' onClick={() => dispatch(setNavState(!isOpen))}>press </button>
                  {props.children}
              </div>
          </div>


    );
}

export default Layout;