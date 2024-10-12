import Image from 'next/image';
import React, { useState } from 'react';
import strelka from '../../public/svg/option_strelka.svg';
interface ARRE {
    title: string;
    action: () => void;
}
function wrapTextWithBr(text: string, maxWidth: number = 400): string {
    // Create a temporary element to measure text width
    const tempElement = document.createElement('span');
    tempElement.style.visibility = 'hidden';
    tempElement.style.whiteSpace = 'nowrap';
    tempElement.style.position = 'absolute';
    document.body.appendChild(tempElement);

    const words = text.split(' ');
    let currentLine = '';
    const wrappedLines: string[] = [];

    words.forEach((word) => {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        tempElement.textContent = testLine;

        if (tempElement.clientWidth > maxWidth) {
            // If the current line exceeds the max width, push it and start a new one
            wrappedLines.push(currentLine.trim());
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    });

    // Add the last line
    wrappedLines.push(currentLine.trim());

    // Clean up the temporary element
    document.body.removeChild(tempElement);

    // Join the lines with <br/>
    return wrappedLines.join('<br/>');
}
export default function Header_select({
    action,
    text,
    ARR,
}: {
    action: () => void;
    text: string;
    ARR?: ARRE[];
}) {
    const [show, setshow] = useState<Boolean>(true);
    return (
        <div
            className="flex flex-col relative "
            onMouseEnter={() => setshow(false)}
            onMouseLeave={() => setshow(true)}
        >
            <div className="flex flex-row gap-[9px]">
                <h5 onClick={() => action()}>{text}</h5>
                <Image
                    onClick={() => setshow((prew) => !prew)}
                    src={strelka}
                    alt="strelka"
                    style={!show ? { transform: 'rotate(180deg)' } : {}}
                />
            </div>
            <div
                className="flex flex-col lg:absolute   top-[100%] w-fit  justify-end text-right right-0  z-[100]  "
                style={show ? { display: 'none' } : { display: 'flex' }}
            >
                {ARR?.map((item: ARRE, i: number) => (
                    <p
                        key={i}
                        onClick={item.action}
                        className={`bg-white rounded-lg p-1 justify-start text-black flex text-start overflow-hidden max-w-[400px] ${
                            item?.title?.length > 53
                                ? 'text-wrap w-[400px]'
                                : 'text-nowrap'
                        }  `}
                    >
                        {item.title}
                    </p>
                ))}
            </div>
        </div>
    );
}
