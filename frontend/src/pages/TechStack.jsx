import { DiReact } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default function TechStack() {
    return (
        <div className="bg-white py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Familiar with but not limited to these technologies
                </h2>
                <div className="mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-pulse">
                    <DiReact size={75} />
                    <FaJava size={75} />
                    <FaPython size={75} />
                    <SiMysql size={75} />
                    <FaNodeJs size={75} />
                </div>
            </div>
        </div>
    );
}
