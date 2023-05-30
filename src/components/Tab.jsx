import { useState } from "react";


const Tab = ({ activeTab, tabName, tabIcon, onClick }) => {

    const isActive = activeTab === tabName;
    return (
        <div className="border-b"
            onClick={() => onClick(tabName)}>
            <ul className="-mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-4 ml-4">
                    <a href="#" className={` border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 dark:hover:text-gray-300 group ${isActive ? ' text-sky-900' : ''}`}>
                    {tabIcon && <img src={tabIcon} className="w-8" alt="" />}{tabName}
                    </a>
                </li>

            </ul>
        </div>

    )
}

export default Tab