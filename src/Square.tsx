
type Props = {
    
}

function Square({ children }: Props) {
    const scale = player ? "scale-100" : "scale-0"
    const textColor = player === "X" ? "text-yellow-200" : "text-fuchsia-300";

    return (
        <div className="h-36 border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center cursor-pointer">
            <span>{children}</span>
        </div>
    );
}

export default Square