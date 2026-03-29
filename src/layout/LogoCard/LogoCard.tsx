export type ObjectFit = "cover" | "contain"

interface Props {
  imageUrl: string
  name: string
  objectFit: ObjectFit
  padding?: boolean
}
export const LogoCard = ({ imageUrl, name, objectFit, padding = false }: Props) => (
  <div className="bg-white/[0.04] border border-white/[0.09] rounded-2xl w-[180px] flex flex-col items-center justify-center gap-3 px-4 pt-5 pb-4 transition-all duration-[250ms] ease-in-out hover:bg-white/[0.08] hover:border-[rgba(255,107,53,0.45)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
    <div className={`w-full h-[72px] flex items-center justify-center${padding ? " p-[10px]" : ""}`}>
      <img className="max-w-full max-h-full" src={imageUrl} alt={name} style={{ objectFit }} />
    </div>
    <span className="text-xs font-semibold text-white/[0.45] tracking-[0.04em] text-center leading-[1.3]">{name}</span>
  </div>
)

