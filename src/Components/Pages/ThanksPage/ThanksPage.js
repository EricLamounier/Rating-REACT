import Container from '../../Container/Container';
import Title from '../../Title/Title';
import Description from '../../Description/Description';

//imagem
import imgRate from '../../../Images/illustration-thank-you.svg';

//css
import './ThanksPage.css';
function ThanksPage () {
    return (
        <main>
            <Container>
                <div id="boxImg">
                    <img id="imgThanks" src={imgRate} alt="img thank you"/>
                </div>
                <div id="rate"><p>You selected {localStorage.getItem('rate')} out of 5</p></div>
                <Title>Thank you!</Title>
                <Description>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</Description>
            </Container>
        </main>
    );
}

export default ThanksPage;