import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './App.css';

const question = ["이모티콘을 평소에 많이 쓰는 편이다?",
    "나는 귀여움이라면 사족을 못 쓴다?",
    "친구들 사이에서 나는?",
    "내일 생일인 친구에게 당장 선물을 준비해줘야 한다면?"
];

let pointEntry

const score = [[[0, 0, 10, 20],
                [0, 20, 0, 0],
                [0, -20, 20, 0],
                [0, -20, 20, -20]
    ],[
                [40, 0, 0, 0],
                [15, 0, 0, 0],
                [0, 0, -10, 10],
                [0, 10, 10, 0]
    ],[
                [-10, 40, -20, 20],
                [0, 0, 20, 20],
                [0, 0, 0, -20],
                [0, -20, 0, -20]
    ],[
                [-10, 20, -20, 0],
                [0, 10, 0, 30],
                [10, 0, -20, -20],
                [0, 0, 20, 10]
    ]]

const answer = [["이모티콘 러버. 거의 아무 때나, 누구에게나 쓴다.",
        "어느 정도 친한 사람들에게만 쓴다.",
        "가끔 감정이 풍부할 때만 쓴다.",
        "이모티콘 같은 거 쓰지 않아도 말로 표현하면 충분하다."],
        ["귀여운 게 최고!",
            "좋아한다.",
            "별 생각 없는 편이다.",
            "귀여운 것보다 다른 매력이 더 눈에 띈다."],
        ["기꺼이 망가지며 웃겨주는 광대 역할을 한다.",
            "항상 새롭게 갈 곳이나 놀 거리를 제안한다.",
            "세심하게 다른 친구를 챙겨주거나 이야기를 잘 들어준다.",
            "조용하고 얌전히 있는다."],
        ["입 싹 닫고 조용히 넘어간다.",
            "돌직구로 뭐 갖고 싶냐고 물어본다.",
            "적당히 축하인사와 치킨 기프티콘 정도?",
            "내일 당장은 못 주는 한이 있어도 정성 가득 담긴 선물을 준비한다."]]

const Ask = () => {

    const [page, setPage] = useState(0);
    const [point, setPoint] = useState([0,0,0,0]);
    const [checked, setChecked] = useState([false, false, false, false]);

    const history = useHistory();

    const nextState = () => {
        setPoint(point.map((value, index) => value + score[page][pointEntry][index]))
        clear()
        if (page < 3) setPage(page+1)
        else {
            const d = pointToResult()
            history.push('/result/'+d)
        }
    }

    const clear = () => {
        setChecked([false, false, false, false])
    }

    const pointToResult = () => {
        if (point[0] > 80){
            if (point[1] > 90){
                return 4;
            }
            return 6;
        }
        if (point[1] > 100){
            if (point[2] > 50){
                return 2;
            }
            return 7;
        }
        if (point[0] > 60){
            if (point[1] > 60){
                if(point[3] > 80){
                    return 1;
                }
                return 8;
            }
            if (point[2] > 50){
                return 3;
            }
        }
        return 5;
    }

    const radioClick = (i) => {
        clear()
        console.log('ok')
        setChecked(checked.map(((value, index) => (index === i))))
        pointEntry = i;
    }

    return (
        <div>
            <h3>{question[page]}</h3>
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" onChange={() => radioClick(0)} checked={checked[0]} />
                        {answer[page][0]}
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2" onChange={() => radioClick(1)} checked={checked[1]} />
                        {answer[page][1]}
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option3" onChange={() => radioClick(2)} checked={checked[2]} />
                        {answer[page][2]}
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option3" onChange={() => radioClick(3)} checked={checked[3]} />
                        {answer[page][3]}
                    </label>
                </div>
            </form>
            <button onClick={nextState}> 다음 </button>
        </div>
    )
}

export default Ask;