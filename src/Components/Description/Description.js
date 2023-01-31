import './Description.css';

export default function Description(props) {
    return(
        <p id="description">{props.children}</p>
    );
}