import { useState } from "react";
import styles from "../../styles/members.module.css";

function UpdateMember() {
  const [yearOfStudy, setYearOfStudy] = useState();
  const [location, setLocation] = useState();
  const [hometown, setHometown] = useState();
  const [program, setProgram] = useState();

  return (
    <div>
      <h4 className={styles.h4}>UPDATE MEMBER</h4>

      <form className={styles.post_container}>
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

        <div className={styles.update_btn_container}>
          <button type="submit" className={styles.update_btn}>
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateMember;
