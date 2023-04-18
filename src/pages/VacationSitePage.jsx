import { useLocation } from "react-router-dom";

function VacationSitePage() {
    const location = useLocation();
    const vacationSite = location.state.vacationSite;
    return ( 
        <main>
            <img src={vacationSite.imgUrl} />
            <h2>{vacationSite.name}</h2>
        </main>
     );
}

export default VacationSitePage;