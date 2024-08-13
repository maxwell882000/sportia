import {CategoryDto} from "../../dtos/categories/categoryDto.ts";

interface Props {
    category: CategoryDto
}

function Category({category}: Props) {
    return <button
        style={{
            backgroundColor: category.bgColor,
        }}
        className={`px-4 h-[2.5rem] 
                    ${category.isActive ? 'hover:bg-opacity-0' : "bg-opacity-12"}
                   flex  rounded-app justify-center items-center space-x-2`}>
        <div>

            {category.icon}
        </div>
        <div className={"text-white"}>
            {category.name}
        </div>

    </button>
}

export default Category
