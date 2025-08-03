import { IoMdHome, IoMdSearch } from "react-icons/io";
import { FaRegCompass, FaRegPlusSquare } from "react-icons/fa";

export default function TabBar({className = ""}: {className?: string}) {

  function handleSearch() {
    // TODO create search Component
    console.log("Search clicked");
  }

  function handleCreate() {
    // TODO create post Component
    console.log("Create clicked");
  }

  const listItem = "flex items-center duration-300 p-2 ml-3 mr-3 mt-2 mb-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-900";

  return (
    <>
      <div className={"w-1/7 h-screen border-r-1 text-lg border-gray-300 dark:border-gray-700 dark:bg-gray-950 dark:text-white " + className}>
        <nav>
          <ul className="transition-all ease-in-out p-3">
            <a href="/home">
              <li>
                <p className="text-3xl font-medium ml-3 mt-5 mb-9">Pinstagram</p>
              </li>
            </a>
            <a href="/home">
              <li className={listItem}>
                <IoMdHome size={28}></IoMdHome>
                <p className="pl-3 pr-3">Home</p>
              </li>
            </a>
            <li className={"cursor-pointer " + listItem} onClick={handleSearch}>
              <IoMdSearch size={28}></IoMdSearch>
              <p className="pl-3 pr-3">Search</p>
            </li>
            <a href="/explore">
              <li className={listItem}>
                <FaRegCompass size={28}></FaRegCompass>
                <p className="pl-3 pr-3">Explore</p>
              </li>
            </a>
            <li className={"cursor-pointer " + listItem} onClick={handleCreate}>
              <FaRegPlusSquare size={28}></FaRegPlusSquare>
              <p className="pl-3 pr-3">Create</p>
            </li>
            <a href="/profile">
              <li className={listItem}>
                <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" className="rounded-2xl w-8" alt="user profile" />
                <p className="pl-3 pr-3">Profile</p>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  )
}