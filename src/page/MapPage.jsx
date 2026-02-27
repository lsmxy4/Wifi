import React from 'react'

const MapPage = () => {
  return (
    <div className='grid gap-4 lg:grid-cols-[7fr_3fr]'>
      <section
        className='overflow-hidden border rounded-2xl bg-white shadow-sm'
      >
        <div className='flex items-center justify-between border-b px-4py-3'>
          <h1 className='text-base font-semibold'>Map</h1>
          <p className='text-xs text-slate-500'>주변 공공 와이파이</p>
        </div>
        <div className='h-[70vh] bg-slate-100 grid place-items-center'>
          <div className="text-center">
            <div className="text-sm">지도영역</div>
            <div className="mt-1">
              여기 지도 들어감
            </div>
          </div>
        </div>
      </section>
      <aside className='border rounded-2xl bg-white shadow-sm'>
        <div className='border-b px-4 py-3'>
          <h2 className='text-base font-semibold'>Wifi Spot</h2>
          <p className='mt-1 text-xs text-slate-500'>검색/필터/목록 UI구성</p>
        </div>
        <div className='flex gap-2 border-b px-4 py-3'>
          <input
            className='flex-3 border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/20 rounded-lg'
            type="text" placeholder='장소 주소 검색' />
          <button
          className='flex-1 bg-slate-900 rouned-lg px-3 py-2 text-white font-medium'
          >검색</button>
        </div>
        <ul className='max-h-[60vh] overflow-auto p-2'>
          {Array.from({ length: 8 }).map((_, idx) => (
            <li 
            key={idx}
            className='rounded-xl-p-3 hover:bg-slate-50 cursor-pointer'>
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <div className='text-sm font-semibold'>Public wifi spot %{idx + 1}</div>
                  <div className='mt-1 text-xs text-slate-500'>
                    경기도 남양주시 진접 ...
                  </div>
                  <span className='rounded bg-slate-100 px-2 py-1'>
                    0.{idx}.km
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default MapPage