const ProjectCard = () => {
    return(
        <div className="max-w-96 bg-blue-700 rounded-t-2xl rounded-md">
            <img className="rounded-t-2xl" src="https://i.ibb.co/8r6SX90/file-1.jpg" alt="file-1" border="0"/>
            <div className="my-2">
                <h2 className="text-white text-xl">Namaste Food</h2>
            </div>
            <div className="mt-1 flex justify-evenly">
                <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Code</button>
                <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Preview</button>
            </div>
        </div>
    )
}

export default ProjectCard;