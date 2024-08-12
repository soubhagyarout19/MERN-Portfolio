const Header = () => {
    return(
        <div>
            <div className="flex justify-around py-6 bg-blue-600 text-white text-lg">
                <div>
                    <h2>Portfolio</h2>
                </div>
                <div className="md:flex gap-10">
                    <h2>Project</h2>
                    <h2>About Me</h2>
                    <h2>Contact</h2>
                </div>
                <div>
                    <h2>Dark Mode</h2>
                </div>
            </div>
        </div>
    )
}

export default Header;