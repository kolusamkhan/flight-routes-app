export default function Buttom(props){
    const {title, onClick, type='button'} = props;
    return(
        <button type={type} onClick={onClick}> {title}</button>
    )
}