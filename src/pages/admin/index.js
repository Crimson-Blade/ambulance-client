import { useEffect, useState } from "react";
import Link from 'next/link';
import Head from 'next/head';
import LogoButton from "@/components/LogoButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Alert from "@/components/Alert";
import Notifications from "@/components/admin/Notifications";
import Profile from "@/components/Profile";
import Auth from "@/components/admin/Auth";
const AdminDashboard = () => {

  // sidebar state
  const [sidebarName, setSidebarName] = useState("notifications")
  const [firstname, setFirstname] = useState('Joe')
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(()=>{
      // fetchSelfData() // fetch data from server
      if(localStorage.getItem('isLoggedIn')) setIsLoggedIn(true)
      else setIsLoggedIn(false)
  },[])
  // style="scroll-behavior: smooth; scroll-padding-top: 5rem;"
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      {/* TODO: move drawer to component of its own */}
      <div className="drawer drawer-mobile bg-base-100">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col" >
          <Header />
          {/* <Alert type='success' /> */}
          <section className="px-6 xl:pr-2 pb-16 flex items-center justify-center flex-grow">
            {sidebarName === 'notifications'? isLoggedIn?<Notifications />:<Auth />: null}
            {sidebarName === 'profile'? isLoggedIn?<Profile />:<Auth />: null}
          </section>
          <Footer />
        </div>
        <div className="drawer-side">
          <label for="drawer" class="drawer-overlay"></label>
          <aside className="bg-base-200 w-80">
            <div class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2">
              <LogoButton />
            </div>
            <div className="h-4"></div>
            <ul className="menu menu-compact flex flex-col p-0 px-4 ">
              <li >
                <Link href="#" className={`flex gap-4 ${sidebarName === 'notifications' ? 'active' : ''}`} onClick={() => { setSidebarName("notifications") }}>
                  <span class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-incoming"><polyline points="16 2 16 8 22 8" /><line x1="23" y1="1" x2="16" y2="8" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </span>
                  <span class="flex-1">Notifications</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={`flex gap-4 ${sidebarName === 'profile' ? 'active' : ''}`} onClick={() => { setSidebarName("profile") }}>
                  <span class="flex-none">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                  </span>
                  <span class="flex-1">Profile</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={`flex gap-4 ${sidebarName === 'logout' ? 'active' : ''}`} onClick={
                  () => { 
                    setSidebarName("notifications");
                    localStorage.removeItem('isLoggedIn');
                    setIsLoggedIn(false);
                  }}>
                  <span class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                  </span>
                  <span class="flex-1">Logout</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}
export default AdminDashboard;