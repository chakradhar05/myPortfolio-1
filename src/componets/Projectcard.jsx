    import React from "react";
    import { GoLinkExternal } from "react-icons/go";

    export default function Projectcard({ title, description, image,githublink,live }) {
    return (
        <div className="w-[250px] bg-slate-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:-translate-x-2">
        <div className="w-full h-40">
            <img
            className="object-cover w-full h-full"
            src={image}
            alt={title}
            />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold text-white">
            {title}
            </h3>
            <p className="mt-1 text-gray-400">
            {description}
            </p>
            <div className="flex justify-between">
            <a
            className="mt-4 inline-block py-2 px-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            href={githublink}
            target="_blank"
            >
            Github
            </a>
            {
                live ? <a
                className="mt-4 inline-block py-2 px-4 text-sm font-semibold text-center text-white"
                href={live? live : '#'}
                target="_blank"
                >
                 <GoLinkExternal />
                </a>: null
            }
            
           
            </div>
            
        </div>
        </div>
    );
    }
