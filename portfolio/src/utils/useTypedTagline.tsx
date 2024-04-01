import { useState, useEffect } from "react";

enum Phase {
    Typing,
    Pausing,
    Deleting,
}

const TYPING_INTERVAL = 50;
const PASUING_TIME = 1000;
const DELETING_INTERVAL = 30;

export function useTypedTagline(taglines: string[]) {
    const [index, setIndex] = useState(0)
    const [phase, setPhase] = useState(Phase.Typing);
    const [typedTagline, setTypedTagline] = useState('');
    useEffect(() => {
        switch(phase) {
            case Phase.Typing: {
                const nextTagline = taglines[index].slice(
                    0,
                    typedTagline.length + 1
                )

                if (nextTagline === typedTagline) {
                    setPhase(Phase.Pausing)
                    return;
                }
                
                const timeout = setTimeout(() => {
                    setTypedTagline(nextTagline)
                }, TYPING_INTERVAL)

                return (() => clearTimeout(timeout));
            }

            case Phase.Deleting: {
                
                if (!typedTagline) {
                    const nextIndex = index + 1;
                    setIndex(taglines[nextIndex] ? nextIndex : 0)
                    setPhase(Phase.Typing)
                    return;
                }

                const nextRemaining = taglines[index].slice(
                    0,
                    typedTagline.length - 1
                )
                
                const timeout = setTimeout(() => {
                    setTypedTagline(nextRemaining)
                }, DELETING_INTERVAL)

                return (() => clearTimeout(timeout));
            }

            case Phase.Pausing:
            default:
                const timeout = setTimeout(() => {
                    setPhase(Phase.Deleting)
                }, PASUING_TIME)

                return (() => clearTimeout(timeout));
        }
    }, [taglines, typedTagline, phase, index])

    return typedTagline;
}