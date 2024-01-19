
const Introduction = () => {
    return (
        <div className="bg-sky-600 py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-left justify-left">
                {/* Photo */}
                <div className="w-1/3 mr-8">
                    <img
                        className="rounded-full object-cover w-full h-auto"
                        src="/src/assets/mypic.jpg"  // Replace with the URL or path to your photo
                        alt="image not found"
                    />
                </div>

                {/* Text */}
                <div className="w-2/3">
                    <h2 className="text-3xl font-semibold text-cyan-300 mb-4">
                        Welcome to my website, I am Atishay
                    </h2>
                    <p className="text-lg text-sky-100">
                        I'm a graduate student at the University of Windsor, looking for full time roles in IT.
                        I have worked at Capgemini, India for over 2 years prior to pursuing Masters in Applied Computing at the University of Windsor.
                        Currently I am utilising my time to work on various projects and widening my skillset around AI. Expertising in Full Stack development using MERN, Spring-boot and Django with an endless passion to learn new technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
