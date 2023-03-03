import { useState } from "react";
import styles from "../../styles/members.module.css";
import Postmember from "./postmember";
import UpdateMember from "./updatemember";

function Members() {
  const [getMemberName, setGetMemberName] = useState();
  const [getHometown, setGetHometown] = useState();
  const [getLocation, setGetLocation] = useState();
  const [year, setYear] = useState();
  const [id, setId] = useState();

  return (
    <>
      <div>
        <h1 className={styles.h1}>CRUD OPERATIONS ON THE MEMBER ENTITY</h1>
      </div>
      <div className={styles.container}>
        <article className={styles.article1}>
          <section>
            <form className={styles.name_form}>
              <h4 className={styles.h4}>Members In {getHometown}</h4>
              <input
                className={styles.name_input}
                type="text"
                placeholder="Member's HomeTown..."
                value={getHometown}
                onChange={(e) => setGetHometown(e.target.value)}
              />
              <button type="submit" className={styles.btn}>
                Get Members
              </button>
            </form>

            <form className={styles.name_form}>
              <h4 className={styles.h4}>Members In {getLocation}</h4>
              <input
                className={styles.name_input}
                type="text"
                placeholder="Member's Location..."
                value={getLocation}
                onChange={(e) => setGetLocation(e.target.value)}
              />
              <button type="submit" className={styles.btn}>
                Get Members
              </button>
            </form>

            <form className={styles.name_form}>
              <h4 className={styles.h4}>Members In Year {year}</h4>
              <input
                className={styles.name_input}
                type="number"
                placeholder="Year Of Study..."
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <button type="submit" className={styles.btn}>
                Get Members
              </button>
            </form>

            <form className={styles.name_form}>
              <input
                className={styles.name_input}
                type="text"
                placeholder="Member's full name..."
                value={getMemberName}
                onChange={(e) => setGetMemberName(e.target.value)}
              />
              <button type="submit" className={styles.btn}>
                Get Member
              </button>
            </form>

            <form className={styles.get_by_id}>
              <input
                className={styles.id_nput}
                type="number"
                placeholder="Type Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

              <button type="submit" className={styles.id_btn}>
                Get Member
              </button>
            </form>
          </section>
        </article>
        <article className={styles.article2}>
          <Postmember />
          <div className={styles.update}>
            <UpdateMember />
          </div>
        </article>
      </div>
    </>
  );
}

export default Members;
