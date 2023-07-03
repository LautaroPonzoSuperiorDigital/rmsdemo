import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Tenant from "./components/tenants";
import ListingsAdmin from "./components/listingsAdmin";
import Applicants from "./components/applicants";
import Chats from "./components/chats";
import Documents from "./components/documents";
import SubAdmins from "./components/subAdmins";
import PublicListings from "./components/public/publicListings";
import ApplicationModal from "./components/public/ApplicationModal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="listingsAdmin" element={<ListingsAdmin />} />
        <Route path="tenantsAdmin" element={<Tenant />} />
        <Route path="applicantsAdmin" element={<Applicants />} />
        <Route path="chatsAdmin" element={<Chats />} />
        <Route path="documentsAdmin" element={<Documents />} />
        <Route path="subAdminsAdmin" element={<SubAdmins />} />
        <Route path="/" element={<PublicListings />} />
        <Route path="/application" element={< ApplicationModal/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
