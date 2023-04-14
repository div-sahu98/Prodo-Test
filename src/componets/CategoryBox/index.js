import { useNavigate } from "react-router";

const Index = ({ id, nameItem, image }) => {
  const navigate = useNavigate();
  // define event handler for category Click
  function handleClick() {
    navigate("/details", {
      state: {
        id: id,
      },
    });
  }

  // render CategoryBox component
  return (
    <div
      className="alingCategoryBox"
      onClick={() => handleClick(id)}
      key={"key" + id}
    >
      <div>{id}</div>
      <div>{nameItem}</div>
      <img
        src={"https://static.prodo.in/" + image}
        alt="Item Image"
        width="100"
        height="100"
      ></img>
    </div>
  );
};

export default Index;
