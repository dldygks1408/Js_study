import styles from './CSS/study.module.css';

function Study(){
  function opentoggle(){
    document.getElementsByClassName(`${styles.toggle_box}`)[0].classList.toggle(`${styles.list_box}`); 
  }
  return(
    <div className={styles.study_body}>

      <h1>● HTML Study</h1>
      <div className={styles.study_Container}>
        <button onClick = { opentoggle }>➕ 펼쳐보기</button>

        <ul className={styles.toggle_box}>
          <li>intro</li>
          <ul>
            <li><p>내용</p></li>
          </ul>
          <li>basic</li>
          <li>attributes</li>
          <li>style</li>
          <li>table</li>
        </ul>

      </div> 

      <h1>● CSS Study</h1>
      <div className={styles.study_Container}>
        <button>➕ 펼쳐보기</button>

      </div> 

      <h1>● JavaScript Study</h1>
      <div className={styles.study_Container}>
        <button>➕ 펼쳐보기</button>

      </div> 

    </div>
  )
}

export default Study;
