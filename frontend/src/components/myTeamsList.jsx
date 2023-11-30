import MyTeams from "./myTeams";

const List = ({ teamsList }) => {
    return (
        <>
            <ul>
                {teamsList.map(teams => (
                    <MyTeams key={teams._id} myTeams={teams} />
                ))}
            </ul>
        </>
    );
};

export default List;