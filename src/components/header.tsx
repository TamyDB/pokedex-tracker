import colors from "~/styles/themes"

export default function Header() {
    return (
        <div className="flex flex-col items-center p-4" >
            <div className="h-32 w-32 rounded-full p-4 text-white" style={{ background: colors.gastly.primary }} >
            </div>
            <h1 className="text-3xl font-bold">Teste</h1>
        </div>
    )
}