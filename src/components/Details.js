import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
const Details = () => {
    const history = useHistory();
    const date_naissance = String(history.location.state.user.date_naissance);
    const res = date_naissance.substring(0,10);
    return (
       <h1>{res}</h1>
    )
}

export default Details
