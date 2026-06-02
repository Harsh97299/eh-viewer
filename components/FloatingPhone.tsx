import PhoneMockup from './PhoneMockup'

export default function FloatingPhone() {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ animation: 'floatY14 4.5s ease-in-out infinite' }}
    >
      <div className="absolute inset-0 bg-[#4C9BE0]/20 blur-[60px] scale-90 rounded-full -z-10" />
      <PhoneMockup size="sm" />
    </div>
  )
}
