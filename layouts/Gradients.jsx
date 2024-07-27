export default function Gradients() {
    return (
        <div className="absolute inset-0 overflow-x-hidden -z-10">
            <div className="absolute top-[200px] left-1/4 bg-violet-300 dark:bg-violet-900 bg-blend-multiply opacity-10 rounded-full blur-3xl w-96 h-96 animate-twPulse animate-infinite animate-duration-[8s]"></div>
            <div className="absolute top-[350px] left-1/3 bg-teal-300 dark:bg-teal-900 bg-blend-multiply opacity-10  rounded-full blur-3xl w-96 h-96 animate-twPulse animate-infinite animate-duration-[10s]"></div>
        </div>
    )
}
