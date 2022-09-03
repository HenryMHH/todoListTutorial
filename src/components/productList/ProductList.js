import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [list, setList] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [imgUrl, setImgUrl] = useState('');

  function fetchData(page) {
    fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`)
      .then(async (res) => {
        // return res.json();
        function test() {
          return new Promise((res) =>
            setTimeout(() => {
              res('hello,world');
            }, 3000)
          );
        }
        const a = await test();
        console.log(a);
        return a;
      })
      .then((res) => {
        // setList(res.products);
        // setMaxPage(res.total / res.limit);
      });
  }

  /**
   * 用async/await語法糖的寫法。
   * 省去連續調用非同步函數使用到的promise chain
   */
  async function FetchDataV2(page) {
    const result = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10}`
    );
    const jsonData = await result.json();
    setList(jsonData.products);
    setMaxPage(jsonData.total / jsonData.limit);
  }

  function numberToArray(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  }

  function handleClickPage(page) {
    setCurrentPage(page);
  }

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div className=" w-[500px] mx-auto mt-[150px] mb-[150px]">
      <div className="border border-black">
        {list.map((item) => (
          <>
            <div
              className="border-b border-black py-3 pl-2 last:border-b-0 cursor-pointer"
              onClick={() => setImgUrl(item.images[0])}
            >
              {item.id}: {item.title}
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {numberToArray(maxPage).map((page) => (
          <div
            className="w-[40px] text-center cursor-pointer"
            onClick={() => handleClickPage(page)}
          >
            {page + 1}
          </div>
        ))}
      </div>

      <div>
        {imgUrl && (
          <img
            src={imgUrl}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
