import React ,{useState} from 'react'
import '../style/Resturants.css'
import Menu from './MenuApi.js'
import MenuCard from './MenuCard'
import NavBar from './NavBar'


// const uniqueList =[
//   ...new Set(
//     Menu.map((res)=>{
//       return res.category;
//     })
//   ),
//   "All",
// ]
function Restaurant() {
  const uniqueList =[
    ...new Set(
      Menu.map((res)=>{
        return res.category;
      })
    ),
    "All",
  ]
    const [apiData,setApiData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category)=>{
      if(category === "All"){
        setApiData(Menu);
        return;
      }
        const updatelist = Menu.filter((res)=>{
            return res.category === category;
        });
        setApiData(updatelist)
    }
  return (
    <>
    <NavBar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={apiData}/>
    </>
  )
}

export default Restaurant
