import Head from 'next/head';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <main className="min-h-screen flex bg-base-200">
      <Head>
        <title>Ambulance App</title>
      </Head>
        <div className="bg-base-100 text-base-content rounded-box m-auto shadow-xl">
          <ul className="menu p-3 text-xl">
            <li className="menu-title">
              <span>Navigator</span>
            </li>
            <li><Link href='/user'>User Dashboard</Link></li>
            <li><Link href='/admin'>Admin Panel</Link></li>
          </ul>
        </div>
    </main>
  );
};

export default IndexPage;
