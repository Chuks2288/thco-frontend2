import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Orders, Customers, Inventory, Conversations, Settings } from './pages';
import { DashLayout, ChatLayout, Chat1, Chat2, Chat3, Chat4, Chat5, Chat6, Chat7, Chat8 } from './components';



const App = () => {

  return (
    <>

      <BrowserRouter>
        <Routes>

          {/* Oulet DashLayout */}
          <Route path='/' element={<DashLayout />}>

            {/* Routes */}
            <Route index element={<Dashboard />} />
            <Route path='orders' element={<Orders />} />
            <Route path='customers' element={<Customers />} />
            <Route path='inventory' element={<Inventory />} />
            <Route path='settings' element={<Settings />} />
            <Route path='/conversations' element={<Conversations />} />


            <Route path="/" element={<ChatLayout />}>
              <Route path='one' index element={<Chat1 />} />
              <Route path='two' element={<Chat2 />} />
              <Route path='three' element={<Chat3 />} />
              <Route path='four' element={<Chat4 />} />
              <Route path='five' element={<Chat5 />} />
              <Route path='six' element={<Chat6 />} />
              <Route path='seven' element={<Chat7 />} />
              <Route path='eight' element={<Chat7 />} />
            </Route>



          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App