import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}

export const Example = () => {
    const [counter, setCounter] = useState<number>(1)

    console.log("Exampl1");

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only first render");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

    </>
}

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log("SetTimeoutExample");

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString();
        }, 1000)

    }, [])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter+
        </button>

    </>
}

export const SetIntervalExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log("SetIntervalExample");

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1);
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
    </>
}

export const SetTimeExample = () => {

    const [time, setTime] = useState<number>(0)
    const [date, setDate] = useState<Date>()

    console.log("SetTimeExample");

    const stop = () => {
        clearInterval(time)
    }

    useEffect(() => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTime(id)
    }, [])


    const stringTime = date?.toLocaleTimeString() || <br/>

    return <>
        Hello, counter: {stringTime}
    </>
}

export const ResetuseEffectExample = () => {

    const [counter, setCounter] = useState<number>(1)
    console.log("Component rendered");
    useEffect(() => {
        console.log("Effect occurred");
        return () => {
            console.log("Reset effect" + counter);
        }
    }, [])
    return <>
        Hello, counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}
export const KeysTrackerExample = () => {

    const [text, setText] = useState<string>('')

    console.log("Component rendered with" + text);
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.addEventListener('keypress', handler);
        }

    }, [])
    return <>
        Typed text: {text}
    </>
}
export const SetTimeOutExample = () => {

    const [text, setText] = useState<string>('')

    console.log("Component rendered with" + text);
    useEffect(() => {
        const timeoutId = setTimeout (() => {
           setText('3 seconds passed')
       }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])
    return <>
        Typed text: {text}
    </>
}