import { CrossIcon } from "../../icons/CrossIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { extractYouTubeUrl } from "../../utils";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps) {    
    return( 
    <div>
        <div className="my-8 p-4 max-w-72 bg-white rounded-md border shadow-sm outline-slate-200">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-lg font-bold">
                    <div className="text-gray-500 pr-2">
                        {/* <ShareIcon size={'md'}/> */}
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank" className="hover:bg-purple-600">
                            <ShareIcon size={'md'}/>
                        </a>
                    </div>
                    <div className="text-gray-500"> 
                        {/* <ShareIcon size={'md'}/> */}
                    </div> 
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" && 
                <iframe 
                    className="w-full rounded-lg"
                    src={extractYouTubeUrl(link)} 
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>}
                
                {type === "twitter" &&
                <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}
            </div>

            <div className="pt-4">
                
            </div>
        </div>
    </div>
    )
}