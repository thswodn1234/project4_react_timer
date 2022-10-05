import './My.css';
import MyTime from './MyTime';

function MyTic(){
    return (
        <h2 className='myh2'>현재시간 : 
        <MyTime/>
        </h2>
    );
}

export default MyTic;