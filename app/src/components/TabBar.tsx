import { IoMdHome, IoMdSearch } from "react-icons/io";
import { FaRegCompass, FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";

export default function TabBar({className = ""}: {className?: string}) {

  const [collapsed, setCollapsed] = useState<boolean>(false);

  function handleSearch() {
    // TODO create search Component
    setCollapsed(!collapsed)
    console.log("Search clicked");
  }

  function handleCreate() {
    // TODO create post Component
    console.log("Create clicked");
  }

  const listItem = "flex items-center duration-300 p-2 ml-3 mr-3 mt-2 mb-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-900 " +
                   (!collapsed? "" : "w-11");

  return (
    <>
      <div className={"h-screen border-r-1 text-lg border-gray-300 dark:border-gray-700 " + 
                      "dark:bg-gray-950 dark:text-white duration-100 " + (collapsed? "w-24 " : "w-1/7 ") + className}>
        <nav>
          <ul className="transition-all ease-in-out p-3">
            <a href="/home">
              <li>
                <p className="text-3xl font-medium ml-3 mt-5 mb-9 text-center">{collapsed? "P" : "Pinstagram"}</p>
              </li>
            </a>
            <a href="/home">
              <li className={listItem}>
                <IoMdHome size={28}></IoMdHome>
                {!collapsed? <p className="pl-3 pr-3">Home</p> : ""}
              </li>
            </a>
            <li className={"cursor-pointer " + listItem} onClick={handleSearch}>
              <IoMdSearch size={28}></IoMdSearch>
              {!collapsed? <p className="pl-3 pr-3">Search</p> : ""}
            </li>
            <a href="/explore">
              <li className={listItem}>
                <FaRegCompass size={28}></FaRegCompass>
                {!collapsed? <p className="pl-3 pr-3">Explore</p> : ""}
              </li>
            </a>
            <li className={"cursor-pointer " + listItem} onClick={handleCreate}>
              <FaRegPlusSquare size={28}></FaRegPlusSquare>
              {!collapsed? <p className="pl-3 pr-3">Create</p> : ""}
            </li>
            <a href="/profile">
              <li className={listItem}>
                <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" className="rounded-2xl w-7" alt="user profile" />
                {!collapsed? <p className="pl-3 pr-3">Profile</p> : ""}
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  )
}