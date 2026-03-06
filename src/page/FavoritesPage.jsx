import React from 'react'
import { Link } from 'react-router-dom'
import { useFavoritesContext } from '../contexts/FavoritesContext'

const FavoritesPage = () => {

  const {favorites,remove} = useFavoritesContext()

  return (
    <div className='rounded-2xl border bg-white p-6 shadow-sm'>
      <h1>Favorites</h1>
      <p>
        {favorites.length > 0 ? `${favorites.length}개의 즐겨찾기` : `즐겨 찾기한것이 없습니다.`}
      </p>
      {favorites.length > 0 && (
        <ul>
          {favorites.map((item,idx) => (
            <li key={idx}>
              <div>
                <div>
                  {item.name}
                </div>
                <div>
                  {item.detail}
                </div>
                <div>
                  {item.phone}
                </div>
              </div>
              <div>
                <Link>지도보기</Link>
                <button>
                  ❤
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FavoritesPage