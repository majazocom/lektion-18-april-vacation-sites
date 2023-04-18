import { Link } from "react-router-dom";

function VacationSiteCard({ data }) {
    return (
        <Link to="/vacationsite" state={{ vacationSite: data }}>
            <article>
                <img src={data.imgUrl} alt="en bild" />
                <h3>{data.name}</h3>
                <p>Rating: {data.rating} av 10</p>
            </article>
        </Link>
    );
};

export default VacationSiteCard;