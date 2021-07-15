import Image from 'next/image'

export default function ProfileAvatar() {
  return (
    <div className="relative block w-[84px] h-[102px] rounded-lg overflow-hidden">
      <Image 
        className="w-full h-full object-cover" 
        src="https://s2.glbimg.com/9Bp3pLU7S0I70QV7J1w41UVGvYw=/0x0:620x423/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/07/19/1_11.jpg" 
        alt="" 
        layout="fill"
      />
      <span className="absolute bottom-2 block px-2 text-shadow text-[11px] font-medium text-white leading-tight tracking-wider">
        Morgan Freeman
      </span>
    </div>
  )
}
