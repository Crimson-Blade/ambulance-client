import { useEffect, useState } from "react";
// import Donate from "./Donate";
// import History from "./History";
// import RequestAmbulance from "./RequestAmbulance";
// import Profile from "./Profile"
// import { useNavigate } from "react-router-dom";
// import url from "../ServerUrl";
import Link from 'next/link';
import Head from 'next/head';
import LogoButton from "@/components/LogoButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Alert from "@/components/Alert";
import CallAmbulanceForm from "@/components/user/CallAmbulanceForm";
import CallHistory from "@/components/user/CallHistory";
import Profile from "@/components/Profile";
const UserDashboard = () => {

  // sidebar state
  const [sidebarName, setSidebarName] = useState("call")
  const [firstname, setFirstname] = useState('Joe')
  // const redirect = useNavigate()

  // if (!localStorage.token) redirect("/");


  // useEffect(()=>{
  //     fetchSelfData() // fetch data from server
  // },[])
  // style="scroll-behavior: smooth; scroll-padding-top: 5rem;"
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      {/* TODO: move drawer to component of its own */}
      <div className="drawer drawer-mobile bg-base-100">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col" >
          <Header />
          {/* <Alert type='success' /> */}
          <section className="px-6 xl:pr-2 pb-16 flex items-center justify-center flex-grow">
          {sidebarName === 'call'? <CallAmbulanceForm />: null}
          {sidebarName === 'history'? <CallHistory />: null}
          {sidebarName === 'profile'? <Profile />: null}
            {/* <div className="bg-base-100 max-w-max text-base-content rounded-box shadow-xl">
              {sidebarName === 'call'? <CallAmbulanceForm />: null}
            </div> */}
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
                <Link href="#" className={`flex gap-4 ${sidebarName === 'call' ? 'active' : ''}`} onClick={() => { setSidebarName("call") }}>
                  <span class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 stroke-current"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </span>
                  <span class="flex-1">Call An Ambulance</span>
                </Link>
              </li>
              <li>
                <Link href="#" className={`flex gap-4 ${sidebarName === 'history' ? 'active' : ''}`} onClick={() => { setSidebarName("history") }}>
                  <span class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="current" width="24" height="24" viewBox="-1 0 19 19" class="cf-icon-svg"><path d="M16.417 9.5a7.919 7.919 0 0 1-15.212 3.082A7.87 7.87 0 0 1 .584 9.5a.554.554 0 0 1 1.109 0 6.81 6.81 0 0 0 13.081 2.65 6.811 6.811 0 0 0-9.66-8.557 6.859 6.859 0 0 0-1.847 1.554h1.276a.554.554 0 0 1 0 1.108h-2.61a.554.554 0 0 1-.555-.554V3.09a.554.554 0 0 1 1.109 0v1.262A7.898 7.898 0 0 1 8.5 1.583 7.911 7.911 0 0 1 16.417 9.5zm-5.181 3a.554.554 0 0 1-.784 0l-2.42-2.42a.552.552 0 0 1-.22-.441V5.168a.554.554 0 1 1 1.11 0v4.234l2.314 2.315a.554.554 0 0 1 0 .784z" /></svg>
                  </span>
                  <span class="flex-1">History</span>
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
              {/* LOGIN NOT NEEDED FOR USER? */}
              {/* <li>
                <Link href="#" className={`flex gap-4 ${sidebarName === 'logout' ? 'active' : ''}`} onClick={() => { setSidebarName("logout") }}>
                  <span class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                  </span>
                  <span class="flex-1">Logout</span>
                </Link>
              </li> */}
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}
export default UserDashboard;