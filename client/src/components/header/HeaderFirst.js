import React from 'react';

import './HeaderFirst.css';

import { AppBar, Toolbar, Typography } from '@mui/material';


function HeaderFirst(props) {
    return (
       <div>
           <AppBar>
           <Toolbar>
                    <Typography><h2 >Meta Blogs</h2></Typography>
                  
               </Toolbar>
           </AppBar>
              
           
       </div>
    );
}

export default HeaderFirst;