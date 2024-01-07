import History from "./History.jsx";

const List = ({ historyList }) => {
    return (
        <>
            <ul>
                {historyList.map((history) => (
                    <History key={history._id} history={history} />
                ))}
            </ul>
        </>
    );
};

export default List;