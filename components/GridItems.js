import Image from 'next/image';
import { useCallback } from 'react';
import useAppContext from '../store';
import {
  CHANGE_TITLE_EDITABLE,
  CHANGE_TITLE,
  CHANGE_TITLE_SIZE,
  CHANGE_QUANTITY,
} from '../store/types';

export const GridItems = () => {
  const { state, dispatch } = useAppContext();

  const handleChangeTitleEditable = useCallback(
    (e, item) => {
      dispatch({
        type: CHANGE_TITLE_EDITABLE,
        payload: { id: item.id, titleEditable: e.currentTarget.checked },
      });
    },
    [dispatch]
  );

  const handleChangeTitle = useCallback(
    (e, item) => {
      dispatch({
        type: CHANGE_TITLE,
        payload: { id: item.id, title: e.currentTarget.value },
      });
    },
    [dispatch]
  );
  const handleChangeTitleSize = useCallback(
    (e, item) => {
      dispatch({
        type: CHANGE_TITLE_SIZE,
        payload: { id: item.id, titleSize: e.currentTarget.value },
      });
    },
    [dispatch]
  );
  const handleChangeQuantity = useCallback(
    (e, item) => {
      dispatch({
        type: CHANGE_QUANTITY,
        payload: { id: item.id, quantity: e.currentTarget.value },
      });
    },
    [dispatch]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 container mx-auto w-[80%] p-4">
      {state.items.map((item) => (
        <div key={item.id} className="border-2 border-black shadow-lg">
          <div className="flex justify-center">
            <div className="relative h-56 w-full">
              <Image
                src={item.urlPreviewImage}
                alt="Sunset in the mountains"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="px-6 py-4">
            <div
              className={`font-bold mb-2 break-words`}
              style={{ fontSize: `${item.titleSize}px` }}
            >
              {item.title}
            </div>
            <div className="form-check form-switch my-2">
              <label className="form-check-label inline-block text-gray-800">
                Editar titulo
              </label>
              <input
                className="form-check-input appearance-none w-9 rounded-full float-right h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                value={item.titleEditable}
                onChange={(e) => handleChangeTitleEditable(e, item)}
              />
            </div>

            <div>
              {item.titleEditable && (
                <>
                  <label>Nombre:</label>
                  <input
                    value={item.title}
                    onChange={(e) => handleChangeTitle(e, item)}
                    className="px-2 border my-2"
                  />
                  <label className="block">Tamaño:</label>
                  <input
                    value={item.titleSize}
                    onChange={(e) => handleChangeTitleSize(e, item)}
                    className="w-full"
                    type="range"
                    list="tickmarks"
                    min={12}
                    max={36}
                  />
                  <datalist id="tickmarks">
                    <option value="12" label="12px" />
                    <option value="14" label="14px" />
                    <option value="16" label="16px" />
                    <option value="18" label="18px" />
                    <option value="20" label="20px" />
                    <option value="24" label="24px" />
                    <option value="30" label="30px" />
                    <option value="36" label="36px" />
                  </datalist>
                </>
              )}
            </div>
            <div className="flex">
              <div className="font-bold">${item.price}</div>
              <div>
                <input
                  className="ml-2 w-12 text-center border"
                  value={item.quantity}
                  onChange={(e) => handleChangeQuantity(e, item)}
                  type="number"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="block bg-pink-200 px-3 py-1 font-semibold mb-2 border-2 border-black">
              Add to car
            </button>
            <a className="px-3 py-1 underline font-medium mb-2" href="car">
              Learn more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
