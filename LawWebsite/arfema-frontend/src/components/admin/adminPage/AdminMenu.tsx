export default AdminMenu;

interface Props {
    handleAdd:()=>void,
    handleEdit:()=>void,
    handleRequests:()=>void,
    handlePrices:()=>void,
}
function AdminMenu({handleAdd,handleEdit,handleRequests,handlePrices}:Props)
{
    return (
    <>
        <div className="admin-menu">
            <a onClick={handleAdd}>Добавить</a>
            <a onClick={handleEdit}>Редактировать</a>
            <a onClick={handleRequests}>Вопросы</a>
            <a onClick={handlePrices}>Цены</a>
        </div>
    </>);
}