import History from "./history.jsx";

const List = ({ historyList }) => {
    return (
        <>
            <ul>
                {historyList.map((history) => (
                    <History key={teams._id} teams={teams} />
                ))}
            </ul>
        </>
    );
};

export default List;