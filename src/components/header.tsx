import React, { useState, useRef, useEffect } from "react";
import profile from "../assets/imgs/profile.svg";
import notice from "../assets/imgs/notice.svg";
import { IoSearch } from "react-icons/io5";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRecentOpen, setIsRecentOpen] = useState(false); // 최근 검색어 창 상태
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const recentRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }

      if (recentRef.current && !recentRef.current.contains(event.target as Node)) {
        setIsRecentOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");

    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches)); 
      } catch (error) {
        console.error("Failed to parse recent searches from localStorage", error);
        setRecentSearches([]); 
      }
    }
  }, []);


  useEffect(() => {
    if (recentSearches.length > 0) {
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }
  }, [recentSearches]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {

      setRecentSearches((prevSearches) => {
        const newSearches = [searchQuery, ...prevSearches].slice(0, 5);
        return newSearches;
      });
      setSearchQuery("");
      setIsRecentOpen(false); 
    }
  };

  return (
    <div className="px-5 h-20 w-full border-b border-gray-2 flex items-center justify-between">
      <div className="text-primary-1 font-bold text-3xl">LOGO</div>
      <div className="mr-5 relative flex-grow max-w-[500px]">
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            name="title"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsRecentOpen(true)} 
            className="pl-3 pr-10 border border-gray-2 rounded-2xl bg-gray h-10 w-full focus:outline-gray-2 mx-3 text-gray-600"
          />
          <IoSearch className="text-gray-500 text-2xl absolute right-0 top-2.5 cursor-pointer" onClick={handleSearchSubmit} />
          
          {recentSearches.length > 0 && isRecentOpen && (
            <div ref={recentRef} className="border border-gray-2 rounded-xl w-full mx-3 text-gray-600 absolute top-12 left-0 bg-white shadow-lg z-10">
              {recentSearches.map((search, index) => (
                <div key={index} className="py-1 px-2 rounded-xl hover:bg-gray-200 cursor-pointer">{search}</div>
              ))}
            </div>
          )}
        </form>
      </div>
      
      <div className="relative">
        <div className="flex">
          <img src={notice} alt="notice" className="mr-3 h-15 w-15 cursor-pointer" />
          <img src={profile} onClick={toggleMenu} alt="profile" className="mr-3 h-15 w-15 cursor-pointer" />
          {isMenuOpen && 
          <div
            ref={menuRef}
            className="flex-col border border-none rounded-md bg-gray-1 w-[7rem] h-[5rem] absolute top-7 right-10 flex items-center justify-center"
          >
            <div className="pb-2">로그인</div>
            <div>회원가입</div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
