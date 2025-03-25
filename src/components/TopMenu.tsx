<<<<<<< HEAD
=======
"use client";

>>>>>>> e070a46bfb3b7bc5a728a1e18de5795df294ed9d
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Link } from "@mui/material";
<<<<<<< HEAD
import styles from "./topmenu.module.css";
=======
import styles from "./topmenu.module.css"; // Import the styles
>>>>>>> e070a46bfb3b7bc5a728a1e18de5795df294ed9d

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.menucontainer}>
      <Image
        src={"/img/logo.png"}
        className={styles.logoimg}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
<<<<<<< HEAD
=======

>>>>>>> e070a46bfb3b7bc5a728a1e18de5795df294ed9d
      <TopMenuItem title="Select Car" pageRef="/car" />
      <TopMenuItem title="Home" pageRef="/" />

      <div className={`${styles.rightSection} flex flex-row absolute right-0 h-full`}>
        <TopMenuItem title="Cart" pageRef="/cart" />
        {session ? (
          <Link href="/api/auth/signout">
<<<<<<< HEAD
            <div className={`mt-3 ${styles.itemcontainer}`}>Sign-Out</div>
=======
            <div className={styles.itemcontainer}>
              Sign-Out {/*session.user?.name*/}
            </div>
>>>>>>> e070a46bfb3b7bc5a728a1e18de5795df294ed9d
          </Link>
        ) : (
          <>
            <Link href="/register">
<<<<<<< HEAD
              <div className={`${styles.itemcontainer} mt-3`}>Register</div>
            </Link>
            <Link href="/api/auth/signin">
              <div className={`${styles.itemcontainer} mt-3`}>Sign-In</div>
=======
              <div className={styles.itemcontainer}> {/* Apply itemcontainer style */}
                Register
              </div>
            </Link>
            <Link href="/api/auth/signin">
              <div className={styles.itemcontainer}> {/* Apply itemcontainer style */}
                Sign-In
              </div>
>>>>>>> e070a46bfb3b7bc5a728a1e18de5795df294ed9d
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
