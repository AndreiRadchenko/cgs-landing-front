const ItemButtons: React.FC<{
  openModal: Function;
  deleteItem: Function;
  item: any;
}> = ({ openModal, item, deleteItem }) => {
  return (
    <div className="buttons">
      <button onClick={() => openModal(item)}>Edit</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
};

export default ItemButtons;
