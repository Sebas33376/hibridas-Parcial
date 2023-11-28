import { useEffect, useState } from "react";
import IconFilter from "../../icons/IconFilter";

const organizePage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mt-6">
                <h1 className="my-6 px-4 font-bold text-xl">Organizar</h1>
                <span className="mr-4">
                    <IconFilter />
                </span>
            </div>
        </div>
    )
}

export default organizePage;