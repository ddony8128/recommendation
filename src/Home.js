import React from 'react';
import { useHistory } from "react-router-dom";
import './App.css';

const Home = () => {

    const style_top = {
        marginTop: '15px',
        marginBottom: '15px',
        color: 'blue',
        fontSize: '15px'
    };

    const style_middle =  {
        color: 'red',
        fontSize: '15px'
    }

    const history = useHistory();

    console.log(history)

    return (
        <div>
            <h1> 이모티콘 추천해주는 테스트! </h1>
            <div style={style_top}> 당신에게 딱 맞는 이모티콘을 추천해드립니다! 몇 가지 질문들에 대답해주시기만 하면 됩니다! </div>
            <div style={style_middle}> 준비가 되셨다면 아래 버튼을 눌러주세요. </div>
            <button onClick={() => history.push('/ask')} > 시작! </button>
        </div>
            /*<h1> 이모티콘 추천해주는 테스트! <h2>
                <p style="margin-top:15px; margin-bottom:15px; font-size:15px; color:blue;">
                    당신에게 딱 맞는 이모티콘을 추천해드립니다! 몇 가지 질문들에 대답해주시기만 하면 됩니다!
                </p>
                <img src="happy_crab.jpg" style="width:40%;height:40%">
                    <p style="font-size:15px;color:red;">
                        준비가 되셨다면 아래 버튼을 눌러주세요.
                    </p>
                    <a href="ask.html"><input type="button" value="시작!"></a>*/

    );
}

export default Home;
