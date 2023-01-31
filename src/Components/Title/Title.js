import './Title.css';

function Title(props) {
    return (
        <h2 id="title">{props.children}</h2>
    );
}

export default Title;