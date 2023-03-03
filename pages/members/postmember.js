import { useState } from "react";
import styles from "../../styles/members.module.css";

function Postmember() {
  const [name, setName] = useState();
  const [orgId, setOrgId] = useState();
  const [yearOfStudy, setYearOfStudy] = useState();
  const [location, setLocation] = useState();
  const [hometown, setHometown] = useState();
  const [program, setProgram] = useState();

  return (
    <div>
      <h4 className={styles.h4}>POST MEMBER</h4>

      <form className={styles.post_container}>
        <input
          className={styles.post_input}
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles.post_input}
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className={styles.post_input}
          type="number"
          placeholder="Year Of Study"
          value={yearOfStudy}
          onChange={(e) => setYearOfStudy(e.target.value)}
        />

        <input
          className={styles.post_input}
          type="text"
          placeholder="Program Of Study"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        />

        <input
          className={styles.post_input}
          type="text"
          placeholder="Home Town"
          value={hometown}
          onChange={(e) => setHometown(e.target.value)}
        />

        <input
          className={styles.post_input}
          type="number"
          placeholder="Org Id"
          value={orgId}
          onChange={(e) => setOrgId(e.target.value)}
        />
        <button type="submit" className={styles.post_btn}>
          Add Member
        </button>
      </form>
    </div>
  );
}

export default Postmember;
