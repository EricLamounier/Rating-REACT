import './Container.css';

function Container(props) {
    return (
        <div id="container">{props.children}</div>
    );
}

export default Container;