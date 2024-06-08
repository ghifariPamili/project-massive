import React from 'react'

function RiwayatDriver() {
  return (
    <div className="container mx-auto py-8">
      {/* {orders.map((order, index) => ( */}
        <div key="" className="mb-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{`Titipan `}</h2>
              {/* <p>{order.status}</p> */}
              <a href="#" className="text-blue-500">Lihat Detail</a>
            </div>
            <div>
              {/* <p className="text-gray-500">{order.time}</p> */}
              {/* <p className="text-black">{order.total}</p> */}
              {/* <span className={`badge ${order.paymentMethod}`}>{order.paymentMethod}</span> */}
            </div>
          </div>
          {/* {order.items && order.items.length > 0 && ( */}
            <div className="mt-4">
              {/* {order.items.map((item, itemIndex) => ( */}
                <div key="" className="flex items-center justify-between">
                  <div>
                    {/* <p>{item.name}</p> */}
                    {/* <p className="text-sm text-gray-500">{item.notes}</p> */}
                  </div>
                  <div>
                    {/* <p>{item.price}</p> */}
                  </div>
                </div>
            {/* //   ))} */}
             </div>
          {/* )} */}
        </div>
      {/* ))} */}
    </div>
  );
};

export default RiwayatDriver