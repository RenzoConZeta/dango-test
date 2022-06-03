import useAppContext from '../store';

export const ResultItems = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="container mx-auto w-[80%] p-4">
      {state.items.map((item) => (
        <div key={item.id}>
          <div className="block font-bold">
            Item: <span className="font-normal">{item.title}</span>
          </div>
          <span className="block font-bold">
            precio: <span className="font-normal">${item.price}</span>
          </span>
          <span className="block font-bold">
            cantidad: <span className="font-normal">{item.quantity}</span>
          </span>
          <span className="block font-bold">
            Total por item:
            <span className="font-normal">
              ${Number(item.price) * Number(item.quantity)}
            </span>
          </span>
          <hr />
        </div>
      ))}
      <span className="block font-bold text-center">
        Total: $
        {state.items.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.price * currentValue.quantity,
          0
        )}
      </span>
    </div>
  );
};
