import main from "../../../assets/main.jpeg";
// import BlockComp from "../block/BlockComp";
function BlogMainComp() {
    return (
        <div className="relative flex justify-center items-center p-36 " >
            <div
                className="absolute inset-0  h-full "
                style={{
                    background: `url(${main}) -2.315px -180.444px / 100% 239.936% no-repeat `,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    opacity: 0.8,
                    zIndex: -1
                }}
            />
            <div className="text-center flex flex-col gap-6 text-white">
                <p className="text-5xl font-bold">Blog</p>
                <p className="text-3xl font-bold">
                    Home &gt; <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Blog</span>
                </p>
            </div>

        </div>
    );
}

export default BlogMainComp;
