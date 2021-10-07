import {Link} from 'react-router-dom';
import styles from './CSS/pjtCard.module.css';
import calImg from './IMG/Calculator_Img.png';
import calendarImg from './IMG/Calendar_Img.png';
import gameImg from './IMG/Game_Img.png';

function PjtCard(){
  return(
    <div className={styles.grid_container}>

      <div className={`${styles.card_container} card_container`} >
        <img src={calImg} width = '200' height='280' />
        <h2>계산기</h2>
        <p>dddd</p>
        <Link to='/cal'> 보러가기 </Link>
      </div>

      <div className={styles.card_container} >
        <img src={calendarImg} width = '200' height='280' />
        <h2>달력</h2>
        <p>dddd</p>
        <Link to='/cal'> 보러가기 </Link>
      </div>

      <div className={styles.card_container} >
        <img src={gameImg} width = '200' height='280' />
        <h2>캔버스 게임</h2>
        <p>dddd</p>
        <Link to='/cal'> 보러가기 </Link>
      </div>

      <div className={styles.card_container} >
        <img src='' width = '200' height='280' />
        <h2>일정 메모</h2>
        <p>dddd</p>
        <Link to='/cal'> 보러가기 </Link>
      </div>

      <div className={styles.card_container} >
        <img src='' width = '200' height='280' />
        <h2>test...</h2>
        <p>dddd</p>
        <Link to='/cal'> 보러가기 </Link>
      </div>

      <div className={styles.card_container} >
        <img src='' width = '200' height='280' />
        <h2>test...</h2>
        <p>dddd</p>
        <Link to='/cal'> 보러가기 </Link>
      </div>

    </div>
  )
}

export default PjtCard;
