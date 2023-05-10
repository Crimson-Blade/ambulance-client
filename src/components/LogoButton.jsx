import Link from 'next/link'
export default function LogoButton() {
  return (
    <Link href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
      <div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
        <span class="lowercase">Ambu</span> <span class="text-base-content uppercase">lance</span>
      </div>
    </Link>
  )
}