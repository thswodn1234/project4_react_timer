function MyTime(){
    return(<div className="mytime">{new Date().toLocaleTimeString()}</div>);
}

export default MyTime;