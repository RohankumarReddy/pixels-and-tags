import { useQuery } from '@tanstack/react-query'
import { div, p } from 'framer-motion/client'
import React, { useState } from 'react'
import PostList from './components/post-list'

function App (){
  
  return (
   <div>
   
 <PostList/>

     </div>
  )
}

export default App
