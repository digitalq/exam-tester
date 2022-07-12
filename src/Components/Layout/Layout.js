import React from 'react';
import { Footer, Header} from '../admin';
import SideBar from '../admin/sidebar';

const Layout = ({content}) => {
    return(
    <div>
   <SideBar/>
      <Header/>
       {content}
    </div>
    );
}



export default Layout;