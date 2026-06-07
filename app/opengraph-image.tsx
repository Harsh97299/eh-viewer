import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const pngBytes = readFileSync(join(process.cwd(), 'public', 'launcher_icon-web.png'))
  const iconSrc = `data:image/png;base64,${pngBytes.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 55%, #EEF3FE 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <img
          src={iconSrc}
          width={200}
          height={200}
          style={{ borderRadius: 44, boxShadow: '0 12px 48px rgba(69,134,243,0.22)' }}
        />
        <div
          style={{
            marginTop: 36,
            fontSize: 80,
            fontWeight: 700,
            color: '#202124',
            letterSpacing: '-3px',
            lineHeight: 1,
          }}
        >
          EhViewer
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: '#5F6368',
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
        >
          Free Manga Reader for Android
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
