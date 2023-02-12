import React from 'react'

function MenuCard(props) {
    let { menuData } = props
    
    // console.log(menuData)
    return (
        <>
        <section className="main-card--cointainer">
            {
                menuData.map((res) => {
                    const {id, category, description, image, name}= res
                    return (
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span>
                                    <h1 className="card-title">{name}</h1>
                                    <span className="card-description subtle">{description}</span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={image} alt="images"  className='card-media'/>
                                <span className="card-tag subtle">Order</span>
                            </div>
                        </div>
                    )
                })}
                </section>
        </>
    )
}

export default MenuCard
