import History from "./history.jsx";

const List = ({ historyList }) => {
    return (
        <>
            <ul>
                {historyList.map((history) => (
                    <Teams key={teams._id} teams={teams} />
                ))}
            </ul>
        </>
    );
};

export default List;