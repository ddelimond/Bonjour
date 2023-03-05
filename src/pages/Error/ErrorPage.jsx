import { useRouteError } from "react-router-dom";
import { Error } from "../../assets/assets";
import './ErrorPage.scss'

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">

            <div>
                <img src={Error} alt="" />
            </div>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}