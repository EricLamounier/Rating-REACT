import { useState } from 'react';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import Description from '../../Description/Description';
import {Link} from 'react-router-dom';

//css
import './RatePage.css';

//images
import starImg from '../../../Images/icon-star.svg';

function RatePage() {

    const [msg, setMsg] = useState(null);

    function clickRate(id) {
        let box = document.getElementById(id);
        if(!box.classList.contains('selected')){
            //retira o selected caso algum ja tenha
            let boxes = document.querySelectorAll('.box')
            boxes.forEach((e) => {
                if(e.classList.contains('selected')){
                    removeBox(e)
                    return
                }
            })
            localStorage.setItem('rate', id)
            setBox(box)
        }
        document.getElementById('submit').removeAttribute('disabled')
    }

    function setBox(box) {
        box.classList.remove('unselected')
        box.classList.add('selected')
    }

    function removeBox(box) {
        box.classList.add('unselected')
        box.classList.remove('selected')
    }

    function showMessage(){
        let msg = document.getElementById('message')
        msg.style.top = '-20px';
        msg.style.zIndex = '1'
        setMsg('Select a valid rate!');
    }

    function sendRate() {
        let boxes = document.querySelectorAll('.box')
        let rate = null
        boxes.forEach((e) => {
            if(e.classList.contains('selected')) {
               rate = e.id
               return
            }
        })

        if(rate === null){
            showMessage()
        }
    }

    return (
        <Container>
            <div id="starLogo">
                <img src={starImg} alt="start icon"/>
            </div>
            <Title>How did we do?</Title>
            <Description>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Description>
            <div id="rateBox">
                <div id="1" className="box unselected" onClick={(e) => clickRate(e.target.id)}>1</div>
                <div id="2" className="box unselected" onClick={(e) => clickRate(e.target.id)}>2</div>
                <div id="3" className="box unselected" onClick={(e) => clickRate(e.target.id)}>3</div>
                <div id="4" className="box unselected" onClick={(e) => clickRate(e.target.id)} >4</div>
                <div id="5" className="box unselected" onClick={(e) => clickRate(e.target.id)}>5</div>
            </div>
            <div id="bttnBox">
                <div id="message">{msg}</div>
                <Link to="/thanks"><button disabled id="submit" type=" button" onClick={sendRate}>SUBMIT</button></Link>
            </div>
      </Container>
    );
}

export default RatePage;