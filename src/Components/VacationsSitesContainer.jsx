import { useSelector } from "react-redux";
import VacationSiteCard from "./VacationSiteCard";

function VacationSitesContainer() {
    //useSelector används för att hämta ut det nuvarande statet i store
    const vacationSites = useSelector((state) => {
        return state.vacationSites
    });
    return (
        <>
            <h3>VacationSitesContainer</h3>
            {vacationSites.map((vacationSite, i) => <VacationSiteCard data={vacationSite} key={i} />)}
        </>
    );
}

export default VacationSitesContainer;