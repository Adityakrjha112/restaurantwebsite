import React from 'react'

function NavBar(props) {
    let {filterItem, menuList} = props
  return (
    <>
       <nav className="navbar">
        <div className="btn-group">
            {
                menuList.map((res)=>{
                    return(
                        <button className="btn-group__item" key={res} onClick={()=> filterItem(res)}>{res}</button>
                    )
                })
            }
        </div>
    </nav>
    </>
  )
}

export default NavBar
