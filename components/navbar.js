import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <h4>HOME</h4>
      </Link>
      <Link href="/members/members">
        <h4>MEMBERS</h4>
      </Link>
      <Link href="/orgs/organisations">
        <h4>ORGANISATION</h4>
      </Link>
      <Link href="/attendance/attendance">
        <h4>ATTENDANCE</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
