import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-transparent text-gray-300 py-8">
            <div className="bg-transparent container mx-auto px-4">
                <div className="bg-transparent flex flex-col md:flex-row justify-between items-start">
                    <div className="bg-transparent mb-6 md:mb-0">
                        <h2 className="font-semibold tracking-wide text-lg mb-1 text-white bg-transparent">
                            MKDC STUDIO
                        </h2>
                        <p className="mb-6 leading-relaxed bg-transparent max-w-md">
                            Parle Product compound 3rd floor, Silo Bldg., V S Khendekar Marg, Near
                            Vile Parle Station North Line level crossing, Vile Parle East,
                            Mumbai-400 057
                        </p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 bg-transparent">
                        <p className="text-sm bg-transparent">&copy; {new Date().getFullYear()} MKDC STUDIO</p>
                        <p className="text-sm bg-transparent">All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;